import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="https://portalfast.ite.mypepsico.com/ep/common/portal/unprotected/dev/pwa/logo.svg" className="App-logo" alt="logo" />
                <p>
                    Hello, I am running on <code>AWS Cloud!</code>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
                <Car />
            </header>
        </div>
    );
}

export default App;
