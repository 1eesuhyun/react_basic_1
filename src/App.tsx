import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
  node_modules : 라이브러리 생성 = .m2
  public : static = css, js, image, html
  src : js/ts
  package.json : build.gradle
    | 라이브러리 추가
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
