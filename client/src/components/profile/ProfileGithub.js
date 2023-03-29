import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "5a0ab91e377535286f53",
      clientSecret: "068ff76d9819d3be046ea09461d62c853cd9d281",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div
        key={repo.id}
        className="card card-body mb-2"
        style={{ fontSize: "15px", borderRadius: "25px" }}
      >
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>
              <a href={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6 offset-md-3">
            <span
              className="badge badge-info mr-1"
              style={{ fontSize: "15px" }}
            >
              Stars: {repo.stargazers_count}
            </span>
            <span
              className="badge badge-secondary mr-1"
              style={{ fontSize: "15px" }}
            >
              Watchers: {repo.watchers}
            </span>
            <span
              className="badge badge-success mr-1"
              style={{ fontSize: "15px" }}
            >
              Forks: {repo.forks}
            </span>
            <span className="badge badge-warning" style={{ fontSize: "15px" }}>
              {repo.language}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-5 text-center">
          Latest Github Repos
          {repoItems}
        </h3>
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
