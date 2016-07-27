# DraftJS: Export ContentState to HTML

This is a module for [DraftJS](https://github.com/facebook/draft-js) that will export your editor content to semantic HTML.

It was extracted from [React-RTE](https://react-rte.org) and placed into a separate module for more general use. Hopefully it can be helpful in your projects.

## Installation

    npm install --save draft-js-export-html

## How to Use

```javascript
import {stateToHTML} from 'draft-js-export-html';
let html = stateToHTML(contentState);
```

## Options

You can optionally pass a second "options" argument to `stateToHTML` which should be an object with one or more of the following properties:

### `inlineStyles`

You can define rendering options for inline styles. This applies to built-in inline styles (e.g. `BOLD`) or your own custom inline styles (e.g. `RED`). You can specify which element/tag name will be used (e.g. use `<b>` instead of `<strong>` for `BOLD`). You can add custom attributes (e.g. `class="foo"`) or add some styling (e.g. `color: red`).

Example:

```javascript
let options = {
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
};
let html = stateToHTML(contentState, options);
```

### `blockRenderers`

You can define a custom renderer for any block type. Pass a function that accepts `block` as an argument. You can return a string to render this block yourself, or return nothing (null or undefined) to defer to the default renderer.

Example:

```javascript
let options = {
  blockRenderers: {
    ATOMIC: (block) => {
      let data = block.getData();
      if (data.foo === 'bar') {
        return '<div>' + escape(block.getText()) + '</div>';
      }
    },
  },
};
let html = stateToHTML(contentState, options);
```

### `blockTags`

You can define custom block tags for specific types. Pass a function that accepts `blockType` as an argument. You may want to use this over `blockRenderers` when you want all the default processing of attributes, styles, etc... but want to simply use a different tag for a block type. The reason this returns an array is because a single block might get wrapped in two tags.

Example:

```javascript
import { BLOCK_TYPE } from 'draft-js-utils';

let options = {
  blockTags: function(blockType) {
    switch (blockType) {
      case BLOCK_TYPE.HEADER_ONE:
        return ['h1'];
      case BLOCK_TYPE.HEADER_TWO:
        return ['h2'];
      case BLOCK_TYPE.HEADER_THREE:
        return ['h3'];
      case BLOCK_TYPE.HEADER_FOUR:
        return ['h4'];
      case BLOCK_TYPE.HEADER_FIVE:
        return ['h5'];
      case BLOCK_TYPE.HEADER_SIX:
        return ['h6'];
      case BLOCK_TYPE.UNORDERED_LIST_ITEM:
      case BLOCK_TYPE.ORDERED_LIST_ITEM:
        return ['li'];
      case BLOCK_TYPE.BLOCKQUOTE:
        return ['blockquote'];
      case BLOCK_TYPE.CODE:
        return ['pre', 'code'];
      case BLOCK_TYPE.ATOMIC:
        return ['figure'];
      default:
        return ['p'];
    }
  },
};
let html = stateToHTML(contentState, options);
```

### `blockWrapperTag`

You can specify custom block wrapper tags. Pass a function that accepts `blockType` as an argument. You can return a string or null.

Example:

```javascript
import { BLOCK_TYPE } from 'draft-js-utils';

let options = {
  blockWrapperTag: function(blockType) {
    switch (blockType) {
      case BLOCK_TYPE.UNORDERED_LIST_ITEM:
        return 'ul';
      case BLOCK_TYPE.ORDERED_LIST_ITEM:
        return 'ol';
      default:
        return null;
    }
  },
};
let html = stateToHTML(contentState, options);
```

## Contributing

If you want to help out, please open an issue to discuss or join us on [Slack](https://draftjs.slack.com/).

## License

This software is [BSD Licensed](/LICENSE).
