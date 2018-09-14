import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      randomStudent: null
    };
    this.grabRando = this.grabRando.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(` http://localhost:8000/candidates`).then(res => {
      let candidates = res.data;
      this.setState({ candidates });
      let randomStudent = this.state.candidates[
        Math.floor(Math.random() * this.state.candidates.length + 1)
      ];
      this.setState({
        randomStudent: randomStudent
      });
    });
  }

  grabRando(e) {
    let randomStudent = this.state.candidates[
      Math.floor(Math.random() * this.state.candidates.length + 1)
    ];
    this.setState({
      randomStudent: randomStudent
    });
  }

  handleClick(e) {
    console.log('likes: ', Number(this.state.randomStudent[e.target.name]) + 1);
    let newValue = Number(this.state.randomStudent[e.target.name]) + 1;
    let updateStudent = Object.assign({}, this.state.randomStudent);
    updateStudent[e.target.name] = newValue;
    this.setState({ randomStudent: updateStudent });
    console.log('ID:', this.state.randomStudent.id);
    axios
      .patch(`http://localhost:8000/candidates/${this.state.randomStudent.id}`, updateStudent)
      .then(response => {
        console.log('did it');
        this.componentDidMount();
      });
  }

  render() {
    return (
      <div className="container center-block">
        <h1>Let's Swipe</h1>

        {this.state.randomStudent && (
          <div className="container center-block">
            <hr />
            <span>
              <h2>
                {this.state.randomStudent.name} {this.state.randomStudent.surname}
              </h2>
            </span>
            <img src={this.state.randomStudent.picUrl} alt="this is a pic" />
            <hr />
            <span>
              <button name="numberOfLikes" className="btn btn-success" onClick={this.handleClick}>
                Like
              </button>
              <button name="numberOfNexts" className="btn btn-danger" onClick={this.handleClick}>
                Swipe
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}
export default Swipe;
