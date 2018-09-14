import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class CandidateDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidate: {}
    };
  }
  render() {
    return (
      <div className="c-wrapper">
        <h1>
          Name: {this.state.candidate.name} {this.state.candidate.surname}
        </h1>

        <h3>Number of Likes: {this.state.candidate.numberOfLikes}</h3>
        <h3>Number of Nexts: {this.state.candidate.numberOfNexts}</h3>
        <img src={this.state.candidate.picUrl} alt="This is a picture" height="100%" />
      </div>
    );
  }
  componentDidMount() {
    let candidateSurname = this.props.match.params.candidateSurname;
    axios.get(`http://localhost:8000/candidates?surname=${candidateSurname}`).then(res => {
      let initialC = res.data;
      let candidate = initialC[0];
      console.log('candidate: ', candidate);

      this.setState({ candidate });
    });
  }
}
export default CandidateDetail;
