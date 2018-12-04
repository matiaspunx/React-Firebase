import React, { Component } from "react";
import "../css/card.css";

class Movie extends Component {
  render() {
    return (
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={this.props.poster} alt={this.props.title} />
            <span className="card-title">{this.props.title}</span>
          </div>
          <div className="card-content">
            <p className="light">{this.props.desc}</p>
          </div>
          <div className="card-action">
            <a href={this.props.url}>Download</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;