# prism-highlight-loader

prism-highlight-loader for webpack.

## Installation

npm install -D prism-highlight-loader

## Usage

```js
import doc from '!!html-loader!prism-highlight-loader!markdown-loader!doc.md'

<div className="markdown-body" dangerouslySetInnerHTML={{ __html: doc }} />
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
