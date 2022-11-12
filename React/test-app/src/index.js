import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { PropTypes } from 'prop-types';
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

/*class StatefulComponent extends React.Component {
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
};*/

/*class MyComponent extends React.Component {
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
};*/

/*class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        this.setState(state => {
            if (state.visibility) {
                return {visibility: false};
            } else {
                return {visibility: true};
            }
        });
    }
    render() {
        if (this.state.visibility === true) {
            return (
            <div>
                <button onClick={this.toggleVisibility}>Click Me</button>
                <h1>Now you see me!</h1>
            </div>
            );
        } else {
            return (
            <div>
                <button onClick={this.toggleVisibility}>Click Me</button>
            </div>
            );
        }
    }
}*/

/*class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState(state => {
            return {count: state.count + 1};
        })
    }
    decrement() {
        this.setState(state => {
            return {count: state.count - 1};
        })
    }
    reset() {
        this.setState({
            count: 0
        });
    }
    render() {
        return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <button className='reset' onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
};*/

/*class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange}></input>
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};*/

/*class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            submit: this.state.input
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}/>
                    <button type='submit'>Submit!</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        );
    }
}*/

/*class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }
    render() {
        return (
            <div>
                <Navbar name={this.state.name}/>
            </div>
        );
    }
};
  
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h1>Hello, my name is: {this.props.name}</h1>
        </div>
        );
    }
};*/

/*class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    render() {
        return (
            <div>
                <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
                <RenderInput input={this.state.inputValue}/>
            </div>
        );
    }
};
  
class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input value={this.props.input} onChange={this.props.handleChange}/>
            </div>
        );
    }
};
  
class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
};*/

/*class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    UNSAFE_componentWillMount() {
      console.log('This is something that will be mounted')
    }
    render() {
      return <div />
    }
};*/

/*class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2000);
    }
    render() {
        return (
            <div>
                <h1>Active Users: {this.state.activeUsers}</h1>
            </div>
        );
    }
}*/

/*class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleEnter() {
        this.setState((state) => ({
            message: state.message + 'You pressed the enter key! '
        }));
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
};*/

const styles = {
    color: 'purple',
    fontSize: 90,
    border: '2px solid purple'
}

class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        if (nextProps.value % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1 style={{fontSize: 90, color: 'purple'}}>{this.props.value}</h1>;
    }
}
  
class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
                <h3 style={styles}>Styling this</h3>
            </div>
        );
    }
}

test.render(<Controller/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
