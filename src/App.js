import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Scorer from "./components/Scorer";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    correct: 0,
    incorrect: 0
    // friendsArray: []
  };


  // shuffleArray = friends => {
  //   const friends = this.state.friends.Shuffle
  // }
  handleIncrement = (id) => {
    console.time("benchmark");
   
    if (friends[id].value===true){

      this.setState({ score: this.state.score + 1 });
      this.setState({ correct: this.state.correct + 1});
      friends[id].value=false
    }
    else if (friends[id].value===false) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ incorrect: this.state.incorrect + 1 });
      this.setState({ friends,
                     score: 0,
                     correct: 0,
                    incorrect: 0})
    }
   console.timeEnd("benchmark")
  };

  shufflePeople = () => {
    console.time("benchmark");
    const friends = this.state.friends.map(a =>
      [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    this.setState({ friends });
    console.timeEnd("benchmark");
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Scorer
          score={this.state.score}
          correct={this.state.correct}
          incorrect={this.state.incorrect}
         />

         

                 
        <Title className="tittle">Best Looking NBA Player Picker</Title>
        <p className="title2"> (Choose the man, who you'd want as the father of your child, without choosing duplicates)</p>
        {this.state.friends.map(friend => (
          <FriendCard
            shufflePeople={this.shufflePeople}
            handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            name={friend.name}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
