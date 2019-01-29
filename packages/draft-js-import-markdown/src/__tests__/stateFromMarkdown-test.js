// @flow
const {describe, it} = global;
import expect from 'expect';
import stateFromMarkdown from '../stateFromMarkdown';
import {convertToRaw} from 'draft-js';

describe('stateFromMarkdown', () => {
  it('should create content state', () => {
    let markdown = 'Hello World';
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
  it('should correctly handle code blocks', () => {
    let markdown = "```\nconst a = 'b'\n```";
    let contentState = stateFromMarkdown(markdown);
    let rawContentState = convertToRaw(contentState);
    let blocks = removeKeys(rawContentState.blocks);
    expect(blocks).toEqual([
      {
        text: "const a = 'b'",
        type: 'code-block',
        data: {},
        depth: 0,
        inlineStyleRanges: [
          {
            length: 13,
            offset: 0,
            style: 'CODE',
          },
        ],
        entityRanges: [],
      },
    ]);
  });
  it('should correctly handle linebreaks option', () => {
    let markdown = 'Hello\nWorld';
    let contentState = stateFromMarkdown(markdown, {parserOptions: {breaks: true}});
    let rawContentState = convertToRaw(contentState);
    let blocks = removeKeys(rawContentState.blocks);
    expect(blocks).toEqual([
      {
        text: 'Hello\nWorld',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ]);
  });
  it('should correctly handle images with complex srcs', () => {
    const src = 'https://spectrum.imgix.net/threads/c678032e-68a4-4e14-956d-abfa444a707d/Captura%20de%20pantalla%202017-08-19%20a%20la(s)%2000.14.09.png.0.29802431313299893';
    let markdown = `![](${src})`;
    let contentState = stateFromMarkdown(markdown);
    let rawContentState = convertToRaw(contentState);
    let blocks = removeKeys(rawContentState.blocks);
    expect({
      ...rawContentState,
      blocks,
    }).toEqual({
      entityMap: {
        // This is necessary due to flow not supporting non-string literal property keys
        // eslint-disable-next-line quote-props
        '0': {
          type: 'IMAGE',
          mutability: 'MUTABLE',
          data: {
            src: src,
          },
        },
      },
      blocks: [{
        text: ' ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [{
          offset: 0,
          length: 1,
          key: 0,
        }],
        data: {},
      }],
    });
  });
  it('should correctly links', () => {
    let markdown = `[link1](https://google.com) [link2](https://google.com)`;
    let contentState = stateFromMarkdown(markdown);
    let rawContentState = convertToRaw(contentState);
    let blocks = removeKeys(rawContentState.blocks);
    expect({
      ...rawContentState,
      blocks,
    }).toEqual({
      entityMap: {
        // This is necessary due to flow not supporting non-string literal property keys
        // eslint-disable-next-line quote-props
        '0': {
          type: 'LINK',
          mutability: 'MUTABLE',
          data: {
            url: "https://google.com",
          },
        },
        // eslint-disable-next-line quote-props
        '1': {
          type: 'LINK',
          mutability: 'MUTABLE',
          data: {
            url: "https://google.com",
          },
        },
      },
      blocks: [{
        text: 'link1 link2',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [{
          offset: 0,
          length: 5,
          key: 0,
        }, {
          offset: 6,
          length: 5,
          key: 1,
        }],
        data: {},
      }],
    });
  });
});

function removeKeys(blocks) {
  return blocks.map((block) => {
    // eslint-disable-next-line no-unused-vars
    let {key, ...other} = block;
    return other;
  });
}
