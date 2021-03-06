import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { email: '', 
                     password: '',
                     formErrors: {email: '', password: ''},
                     emailValid: false,
                     passwordValid: false,
                     formValid: false
                  };
  
      this.handleChange = this.handleEmailChange.bind(this);
      this.handleChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }
  
    handleSubmit(event) {
      alert('An email and password were submitted.');
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="Form">
        <header className="Form-header">
            <h3>A Simple Form</h3>
        </header>
        <body className="Form-body">
            <form onSubmit={this.handleSubmit}>
            <label>
                Email:
                <input type="text" onChange={this.handleEmailChange} />
            </label>
            <br></br>
            <label>
                Password:
                <input type="text" onChange={this.handlePasswordChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </body>
      </div>
      );
    }
}

export default Form;