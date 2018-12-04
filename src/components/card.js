import React, { Component } from "react";
import "../css/card.css";

class Card extends Component {
  render() {
    return (
      <div className="col s12 m4">
        <div className="card">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">{this.props.icon}</i></h2>
            <h5 className="center">{this.props.title}</h5>
            <p className="light">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;