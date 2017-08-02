import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'github-markdown-css'
import 'prismjs/themes/prism.css'
import doc from '!!html-loader!prism-highlight!markdown-loader!../README.md' // eslint-disable-line

class App extends Component {
  render() {
    const docStyle = {
      textAlign: 'left',
      padding: '24px',
      width: 900,
      margin: 'auto',
      border: '2px solid #ccc',
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="markdown-body" style={docStyle} dangerouslySetInnerHTML={{ __html: doc }} />
      </div>
    );
  }
}

export default App;
