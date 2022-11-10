import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const myElement = <h1>Hello JSX!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

const JSX = (
    <div>
        <h1>Hey Mario</h1>
        <p>Let's render this to the DOM</p>
    </div>
);

const MyFirstComponent = function() {
    return (
        <div>
            <h3>This is my first component in React</h3>
        </div>
    );
};

const test = ReactDOM.createRoot(document.getElementById('testing-this'));
test.render(JSX);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
