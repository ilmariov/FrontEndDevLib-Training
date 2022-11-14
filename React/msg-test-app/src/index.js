import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Redux
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, action.message];
    default: 
      return state
  }
}

//React
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  };
  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }

  submitMessage() {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange.bind(this)}></input>
        <br/><br/>        
        <button onClick={this.submitMessage.bind(this)}>Add message</button>
        <ul>
          {this.state.messages.map(item => <li>{item}</li>)}
        </ul>
      </div>
    );
  }
};

root.render(<DisplayMessages/>)

/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
