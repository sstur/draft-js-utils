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

`stateToHTML` accepts an optional options object as a second argument.

| Option key     | Option Description   |
| -------------- | -------------------- |
| customStyleMap | Custom style mapping object, similar to the [customStyleMap](https://facebook.github.io/draft-js/docs/advanced-topics-inline-styles.html#mapping-a-style-string-to-css) the draft-js `Editor` receives.  |

Example of options usage:

```javascript
  import {stateToHTML} from 'draft-js-export-html';
  let options = {
    customStyleMap: {
      RED: { color: 'red' }
    }
  };
  let html = stateToHTML(contentState, options);
```


This project is still under development. If you want to help out, please open an issue to discuss or join us on [Slack](https://draftjs.slack.com/).

## License

This software is [BSD Licensed](/LICENSE).
