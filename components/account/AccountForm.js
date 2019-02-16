import React from 'react';

export default class AccountForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', username: '', password: '', countryCode: '', phoneNumber: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.value});
    }

    handleChange(event) {
        this.setState({username: event.target.value});
      }

    handleChange(event) {
        this.setState({password: event.target.value});
    }

    handleChange(event) {
        this.setState({countryCode: event.target.value});
    }

    handleChange(event) {
        this.setState({phoneNumber: event.target.value});
      }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {/* email:       { type: String, required: true },
  username:    { type: String, required: true },
  password:    { type: String },
  countryCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  date:        { type: Date, default: Date.now }, */}
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Username:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Country Code:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }