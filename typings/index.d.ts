/// <reference types="draft-js" />

declare module 'draft-js-export-html' {
    import draftjs = require("draft-js");

    type BlockStyleFn = (block: draftjs.ContentBlock) => any;
    type BlockRenderer = (block: draftjs.ContentBlock) => string;
    type RenderConfig = {
        element?: string;
        attributes?: any;
        style?: any;
    };

    export interface Options {
        inlineStyles?: { [styleName: string]: RenderConfig };
        blockRenderers?: { [blockType: string]: BlockRenderer };
        blockStyleFn?: BlockStyleFn;
    }

    export function stateToHTML(content: draftjs.EditorState, options?: Options): string;
}
