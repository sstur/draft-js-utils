/* @flow */
const {describe, it} = global;
import expect from 'expect';
import {convertFromRaw} from 'draft-js';
import stateToHTML from '../stateToHTML';
import fs from 'fs';
import {join} from 'path';

// This separates the test cases in `data/test-cases.txt`.
const SEP = '\n\n#';

let testCasesRaw = fs.readFileSync(
  join(__dirname, '..', '..', 'test', 'test-cases.txt'),
  'utf8',
);

// These test cases specify custom options also.
let testCasesCustomRaw = fs.readFileSync(
  join(__dirname, '..', '..', 'test', 'test-cases-custom.txt'),
  'utf8',
);

let testCases = testCasesRaw.slice(1).trim().split(SEP).map((text) => {
  let lines = text.split('\n');
  let description = lines.shift().trim();
  let state = JSON.parse(lines.shift());
  let html = lines.join('\n');
  return {description, state, html};
});

let testCasesCustom = testCasesCustomRaw.slice(1).trim().split(SEP).map((text) => {
  let lines = text.split('\n');
  let description = lines.shift().trim();
  let options = JSON.parse(lines.shift());
  let state = JSON.parse(lines.shift());
  let html = lines.join('\n');
  return {description, options, state, html};
});

describe('stateToHTML', () => {
  testCases.forEach((testCase) => {
    let {description, state, html} = testCase;
    it(`should render ${description}`, () => {
      let contentState = convertFromRaw(state);
      expect(stateToHTML(contentState)).toBe(html);
    });
  });

  testCasesCustom.forEach((testCase) => {
    let {description, options, state, html} = testCase;
    it(`should render ${description}`, () => {
      let contentState = convertFromRaw(state);
      expect(stateToHTML(contentState, options)).toBe(html);
    });
  });

  it('should support custom block renderer', () => {
    let options = {
      blockRenderers: {
        'code-block': (block) => {
          return `<div class="code">${block.getText()}</div>`;
        },
      },
    };
    let contentState = convertFromRaw(
      // <pre><code>Hello <em>world</em>.</code></pre>
      {"entityMap":{},"blocks":[{"key":"dn025","text":"Hello world.","type":"code-block","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"ITALIC"}],"entityRanges":[]}]} // eslint-disable-line
    );
    expect(stateToHTML(contentState, options)).toBe(
      '<div class="code">Hello world.</div>'
    );
    let contentState2 = convertFromRaw(
      // <h1>Hello <em>world</em>.</h1>
      {"entityMap":{},"blocks":[{"key":"dn025","text":"Hello world.","type":"header-one","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"ITALIC"}],"entityRanges":[]}]} // eslint-disable-line
    );
    expect(stateToHTML(contentState2, options)).toBe(
      '<h1>Hello <em>world</em>.</h1>'
    );
  });

  it('should support custom entities renderer', () => {
    let options = {
      entityRenderers: {
        COLOR: {
          attributeMap: {color: 'color'},
          render: (attrs, content) => {
            const {color} = attrs;

            return `<span style="color: ${color}">${content}</span>`;
          },
        },
      },
    };
    let contentState = convertFromRaw(
      //<span style="color: #f40000"><h2>red</h2></span>
      {"entityMap":{"0":{"type":"COLOR","mutability":"MUTABLE","data":{"color":"#f40000"}}},"blocks":[{"key":"16bo7","text":"Red","type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":3,"key":0}]}]} // eslint-disable-line
    );
    expect(stateToHTML(contentState, options)).toBe(
      '<h2><span style="color: #f40000">Red</span></h2>'
    );
  });
});
