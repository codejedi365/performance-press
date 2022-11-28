import React from 'react';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <a
        className="github-fork-ribbon right-top"
        href="https://github.com/codejedi365/performance-press"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
      >
          Fork me on GitHub
      </a>
      <header className="App-header">
        <p>
          Edit <code>src/components/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
