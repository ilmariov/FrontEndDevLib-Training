import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Redux
/*const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}*/


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

//connect Redux to React
/*class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
}*/

root.render(
  <Provider store={store}>
    <DisplayMessages />
  </Provider>
)

/*root.render(
  <React.StrictMode>
    <DisplayMessages />
  </React.StrictMode>
);*/
