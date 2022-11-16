import React from 'react';

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

export default DisplayMessages;