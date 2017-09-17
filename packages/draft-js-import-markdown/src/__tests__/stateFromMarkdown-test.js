// @flow
const {describe, it} = global;
import expect from 'expect';
import stateFromMarkdown from '../stateFromMarkdown';
import {convertToRaw} from 'draft-js';

describe('stateFromMarkdown', () => {
  let markdown = 'Hello World';
  it('should create content state', () => {
    let contentState = stateFromMarkdown(markdown);
    let rawContentState = convertToRaw(contentState);
    let blocks = removeKeys(rawContentState.blocks);
    expect(blocks).toEqual([
      {
        text: 'Hello World',
        type: 'unstyled',
        data: {},
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      },
    ]);
  });
  it('should correctly move code blocks', () => {
    let codeMarkdown = '```\nconst a = \'b\'\n```';
    let contentState = stateFromMarkdown(codeMarkdown);
    let rawContentState = convertToRaw(contentState);
    let blocks = removeKeys(rawContentState.blocks);
    expect(blocks).toEqual([
      {
        text: 'const a = \'b\';',
        type: 'code-block',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      },
    ]);
  });
});

function removeKeys(blocks) {
  return blocks.map((block) => {
    let {key, ...other} = block; // eslint-disable-line no-unused-vars
    return other;
  });
}
