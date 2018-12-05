# DraftJS: Export ContentState to Markdown

This is a module for [DraftJS](https://github.com/facebook/draft-js) that will export your editor content to Markdown.

It was extracted from [React-RTE](https://react-rte.org) and placed into a separate module for more general use. Hopefully it can be helpful in your projects.

## Installation

    npm install --save draft-js-export-markdown

This project is still under development. If you want to help out, please open an issue to discuss or join us on [Slack](https://draftjs.slack.com/).

## How to Use

    import { stateToMarkdown } from "draft-js-export-markdown";
    const markdown = stateToMarkdown(
      this.state.editorState.getCurrentContent()
    )

## License

This software is [ISC Licensed](/LICENSE).
