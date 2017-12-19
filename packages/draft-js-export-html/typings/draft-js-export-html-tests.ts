import {EditorState, ContentBlock} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

const state = EditorState.createEmpty().getCurrentContent();

let res: string = stateToHTML(state);
res = stateToHTML(state, {
    inlineStyles: {
        // Override default element (`strong`).
        BOLD: {element: 'b'},
        ITALIC: {
            // Add custom attributes. You can also use React-style `className`.
            attributes: {class: 'foo'},
            // Use camel-case. Units (`px`) will be added where necessary.
            style: {fontSize: 12}
        },
        // Use a custom inline style. Default element is `span`.
        RED: {style: {color: '#900'}},
    },
});
res = stateToHTML(state, {
    blockRenderers: {
        ATOMIC: (block) => {
            let data = block.getData();
            return data.toString();
        },
    },
});
res = stateToHTML(state, {
    defaultBlockTag: 'div',
});
res = stateToHTML(state, {
    entityStyleFn: (entity) => {
        if (entity.getType() === 'FOO') {
            return {
                element: 'div',
                style: { color: 'red' }
            };
        }
    }
})
