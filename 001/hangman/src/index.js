import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Letter extends React.Component {
  render() {
    return <span className="letter">{this.props.value}</span>;
  }
}

class GameBoard extends React.Component {
  render() {
    let letters = [];
    this.props.targetWord.split("").forEach((letter, index) => {
      letters.push(<Letter value={letter} key={index} />);
    });

    return <div>{letters}</div>;
  }
}

class Hangman extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hangman Clone</h1>
        <p>Welcome to my game</p>
        <div>
          <GameBoard targetWord="Ujval" />
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Hangman />, document.getElementById("root"));
