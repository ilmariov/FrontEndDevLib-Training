import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PropTypes } from 'prop-types';
//import reportWebVitals from './reportWebVitals';

//const myElement = <h1>Hello JSX!</h1>

const test = ReactDOM.createRoot(document.getElementById('test-div'));

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
            <h3>No you're not, "NestedComponents" is!</h3>
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

/*const ChildComponent = () => {
    return (
        <div>
            <p>Noooo, now I'm MyFirstComponent's baby!!</p>
        </div>
    );
}*/

/*class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Obey! I'm your father</h1>
                <MyFirstComponent />
            </div>
        );
    }
}
const gettingThis = <ParenComponent />;
root.render(gettingThis);*/

/*class NestedComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>All right Kids, behave!!!</h1>
                <ParentComponent />
            </div>
        );
    }
}
test.render(<NestedComponents />);*/

/*const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};
  
class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                <CurrentDate date={Date()}/>
            </div>
        );
    }
};*/

/*const List = (props) => {
    return <p>{props.tasks.join(', ')}</p>
};

List.defaultProps = {tasks: ['task1', 'task2', 'task3']}

List.propTypes = {tasks: PropTypes.array.isRequired}
  
class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                <List/>
                <h2>Tomorrow</h2>
                <List tasks={['brush my teeth', 'sign papers', 'programming']}/>
            </div>
        );
    }
};*/

/*class App extends React.Component {
    constructor(props) {
        super(props);
  
    }
    render() {
        return (
            <div>
                <Welcome name={'Mario'}/>
            </div>
        );
    }
};
  
class Welcome extends React.Component {
    constructor(props) {
        super(props);
  
    }
    render() {
        return (
            <div>
                <p>Hello, <strong>{this.props.name}</strong>!</p>
            </div>
        );
    }
  };

test.render(<App />)*/

/*const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};
ShoppingCart.defaultProps = {
    items: 0
}*/

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Mario',
            age: 34
        }
    }
    render() {
        const age = this.state.age;
        return (
            <div>
                <h1>Hey, I'm {this.state.firstName} and I'm {age}.</h1>
            </div>
        );
    }
};

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Click and see'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            name: 'Did you?'
        });
    }
    render() {
        return (
            <div>
            <button onClick={this.handleClick}>Click Me</button>
            <h1>{this.state.name}</h1>
            </div>
        );
    }
};
test.render(<MyComponent/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
