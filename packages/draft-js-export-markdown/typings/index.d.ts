/// <reference types="draft-js" />

declare module 'draft-js-export-markdown' {
    import draftjs = require('draft-js');

    export function stateToMarkdown(content: draftjs.ContentState): string;
}