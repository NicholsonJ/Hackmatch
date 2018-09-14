import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: []
    };
  }

  componentDidMount() {
    axios.get(` http://localhost:8000/candidates`).then(res => {
      let candidates = res.data;
      this.setState({ candidates });
    });
  }
  render() {
    if (this.state.candidates === []) {
      return (
        <div>
          <h1>This will be the class list</h1>
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>HackMatch</h1>
        <table className="table table table-striped">
          <thead>
            <tr className="tablehead">
              <th>Name</th>
              <th>Picture</th>
              <th>Number of Likes</th>
              <th>Number of Nexts</th>
            </tr>
          </thead>
          <tbody>
            {this.state.candidates.map((c, i) => {
              return (
                <tr className="" key={i}>
                  <td>
                    <Link to={`/candidate/${c.surname}`} key={i}>
                      {c.name} {c.surname}
                    </Link>
                  </td>
                  <td>
                    <img src={c.picUrl} alt="This is a picture" height="100px" />
                  </td>
                  <td>{c.numberOfLikes}</td>
                  <td>{c.numberOfNexts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
