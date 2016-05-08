/* @flow */
const {describe, it} = global;
import expect from 'expect';
import {ContentState, convertFromRaw} from 'draft-js';
import stateToHTML from '../stateToHTML';
import fs from 'fs';
import {join} from 'path';

// This separates the test cases in `data/test-cases.txt`.
const SEP = '\n\n#';

let testCasesRaw = fs.readFileSync(
  join(__dirname, '..', '..', 'test', 'test-cases.txt'),
  'utf8',
);

let testCases = testCasesRaw.slice(1).trim().split(SEP).map((text) => {
  let lines = text.split('\n');
  let description = lines.shift().trim();
  let state = JSON.parse(lines[0]);
  let html = lines.slice(1).join('\n');
  return {description, state, html};
});

const customStyles = {
  BLUE_ON_RED: (content) => `<span style="color: blue; background-color: red">${content}</span>`,
  UPPERCASE: (content) => `<span style="text-transform: uppercase">${content}</span>`,
};

describe('stateToHTML', () => {
  testCases.forEach((testCase) => {
    let {description, state, html} = testCase;
    it(`should render ${description}`, () => {
      let contentState = ContentState.createFromBlockArray(
        convertFromRaw(state)
      );
      expect(stateToHTML(contentState, customStyles)).toBe(html);
    });
  });
});
