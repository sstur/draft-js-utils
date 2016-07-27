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

  it('should support custom tags', () => {
    let options = {
      blockTags(blockType) {
        switch (blockType) {
          case 'blockquote':
            return ['p'];
          default:
            return ['span'];
        }
      },
    };
    let contentState = convertFromRaw(
        // <h1>Hello <em>world</em>.</h1>
        {"entityMap":{},"blocks":[{"key":"dn025","text":"Hello world.","type":"header-one","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"ITALIC"}],"entityRanges":[]}]} // eslint-disable-line
    );
    expect(stateToHTML(contentState, options)).toBe(
        '<span>Hello <em>world</em>.</span>'
    );
    let contentState2 = convertFromRaw(
        // <blockquote>Hello <em>world</em>.</blockquote>
        {"entityMap":{},"blocks":[{"key":"dn025","text":"Hello world.","type":"blockquote","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"ITALIC"}],"entityRanges":[]}]} // eslint-disable-line
    );
    expect(stateToHTML(contentState2, options)).toBe(
        '<p>Hello <em>world</em>.</p>'
    );
  });

  it('should support custom wrapper tag', () => {
    let options = {
      blockWrapperTag(blockType) {
        switch (blockType) {
          case 'unordered-list-item':
            return 'ol';
          default:
            return 'ul';
        }
      },
    };
    let contentState = convertFromRaw(
        /*
         <ol>
           <li>One</li>
           <li>Two</li>
         </ol>
         */
        {"entityMap":{},"blocks":[{"key":"8kinl","text":"One","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"key":"ekll4","text":"Two","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[]}]} // eslint-disable-line
    );
    expect(stateToHTML(contentState, options)).toBe(
        '<ul>\n  <li>One</li>\n  <li>Two</li>\n</ul>'
    );
    let contentState2 = convertFromRaw(
        /*
         <ul>
           <li>One</li>
           <li>Two</li>
         </ul>
         */
        {"entityMap":{},"blocks":[{"key":"8kinl","text":"One","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"key":"ekll4","text":"Two","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[]}]} // eslint-disable-line
    );
    expect(stateToHTML(contentState2, options)).toBe(
        '<ol>\n  <li>One</li>\n  <li>Two</li>\n</ol>'
    );
  });
});
