import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Header from "./components/Header";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score: 0,
    highscore: 0,};
  
  handleCount = id => {
    this.state.characters.find((d, i) => {
      if (d.id === id) {
        if(characters[i].wasClicked === 0) {
          characters[i].wasClicked = characters[i].wasClicked + 1;
          this.setState({score: this.state.score + 1}, function(){
            console.log(this.state.score);
            console.log(characters.wasClicked);      
          });
          this.state.characters.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameReset();}}})};

  gameReset = () => {
    if (this.state.highscore < this.state.score) {
      this.setState({highscore: this.state.score}, function () {
        console.log(this.state.highscore);
      })
    }
      this.state.characters.forEach(character => {
        character.wasClicked = 0;
      });
      this.setState({score: 0});
      return true;}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Memory Click Game</Header>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}/>
        ))}
      </Wrapper>);}}

export default App;