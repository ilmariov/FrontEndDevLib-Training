import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/maps';

class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    };
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
  
    submitMessage() {
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: ''
        });
    }
  
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input value={this.state.input} onChange={this.handleChange}></input>
                <br/><br/>        
                <button onClick={this.submitMessage}>Send</button>
                <ul>
                    {this.props.messages.map(item => <li>{item}</li>)}
                </ul>
            </div>
        );
    }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);

export default Container;