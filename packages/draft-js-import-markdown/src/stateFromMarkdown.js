// @flow

import MarkdownParser from './MarkdownParser';
import {stateFromElement} from 'draft-js-import-element';

import type {ContentState} from 'draft-js';
import type {ElementStyles, CustomBlockFn, CustomInlineFn} from 'draft-js-import-element';

type Options = {
  elementStyles?: ElementStyles;
  blockTypes?: {[key: string]: string};
  customBlockFn?: CustomBlockFn;
  customInlineFn?: CustomInlineFn;
};

export default function stateFromMarkdown(
  markdown: string,
  options?: Options,
): ContentState {
  let element = MarkdownParser.parse(markdown, {getAST: true});
  return stateFromElement(element, options);
}
