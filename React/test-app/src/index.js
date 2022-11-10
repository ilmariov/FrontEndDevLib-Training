import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import reportWebVitals from './reportWebVitals';

//const myElement = <h1>Hello JSX!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myElement);

/*const JSX = (
    <div>
        <h1>Hey Mario</h1>
        <p>Let's render this to the DOM</p>
    </div>
);
root.render(JSX);*/

/*const MyFirstComponent = function() {
    return (
        <div>
            <h3>This is my first component in React</h3>
        </div>
    );
};
const tryingComp = <MyFirstComponent />;
root.render(tryingComp)*/

/*class AnotherComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Now I'm testing this other way to create a component</h1>
            </div>
        );
    }
}
const stillTrying = <AnotherComponent/>;
root.render(stillTrying);*/

const ChildComponent = () => {
    return (
        <div>
            <p>All right, I am the child, is that ok?</p>
        </div>
    );
}

class ParenComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Obey! I'm your father</h1>
                <ChildComponent />
            </div>
        );
    }
}

const gettingThis = <ParenComponent />;
root.render(gettingThis);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
