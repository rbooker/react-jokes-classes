import React, { Component } from "react";
import "./Joke.css";

//All done with classes, so, the opposite of refactoring - defactoring, perhaps?
class Joke extends Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
  }

  //Upvote
  upVote() {
    this.props.vote(this.props.id, +1);
  }

  //Downvote
  downVote() {
    this.props.vote(this.props.id, -1);
  }

  //Lock the toggle
  toggleLock() {
    this.props.toggleLock(this.props.id);
  }

  render() {
    return (
      <div className={`Joke ${this.props.locked ? "Joke-locked" : ""}`}>
        <div className="Joke-votearea">
          <button onClick={this.upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={this.downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          <button onClick={this.toggleLock}>
            <i
              className={`fas ${this.props.locked ? "fa-unlock" : "fa-lock"}`}
            />
          </button>

          {this.props.votes}
        </div>

        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Joke;
