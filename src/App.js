import React, { Component } from "react";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import puppies from "./puppies.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: "Click an Image to begin!",
    topScore: 0,
    curScore: 0,
    puppies: puppies
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  // // npm shuffle-array***
  //   var shuffle = require('shuffle-array'),
  //     collection = [1,2,3,4,5,6,7,8,9,10,11,12];

  // shuffle(collection);

  // Map over this.state.friends and render a FriendCard component for each puppies object
  render() {
    return (
      // <Wrapper>
      //   <Title>Puppy List</Title>
      //   {/* {this.state.friends.map(puppies => (
      //     <PuppyCard
      //       removeFriend={this.removeFriend}
      //       id={puppies.id}
      //       key={puppies.id}
      //       image={puppies.image}
      //     />
      //   ))} */}
      // </Wrapper>

      <Wrapper>
        {this.state.puppies.map(puppies => (
          <PuppyCard
            removeFriend={this.removeFriend}
            id={puppies.id}
            key={puppies.id}
            image={puppies.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
