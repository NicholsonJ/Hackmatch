import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class NewHacker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      picUrl: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this.state: ', this.state);
    axios
      .post('http://localhost:8000/candidates', {
        name: this.state.name,
        surname: this.state.surname,
        picUrl: this.state.picUrl,
        numberOfLikes: 0,
        numberOfNexts: 0
      })
      .then(res => {
        console.log('this is done');
        this.props.history.goBack();
      });
  }

  render() {
    return (
      <div className="container mt-3">
        <h1>Let's add a new hacker</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Picture</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="picUrl"
              placeholder="Add URL for a pic"
            />
          </div>
          <label>Name</label>
          <div className="row">
            <div className="col">
              <input
                type="text"
                onChange={this.handleChange}
                name="name"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                onChange={this.handleChange}
                name="surname"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default NewHacker;
