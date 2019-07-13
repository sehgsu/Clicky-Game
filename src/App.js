import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Header from "./components/Header";

class App extends React.Component {
  state = {
    characters,
    score: 0,
    highscore: 0
  };
  
  gameReset = () => {
    if (this.state.highscore < this.state.score) {
      this.setState({highscore: this.state.score}, function () {
        console.log(this.state.highscore);
      })
    }
      this.state.characters.forEach(character => {
        character.clicked = 0;
      });
      this.setState({score: 0});
    }
  
  handleCount = id => {
    this.state.characters.find((d, i) => {
      if (d.id === id) {
        if(characters[i].clicked === 0) {
          characters[i].clicked = characters[i].clicked + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
            console.log(characters.clicked);      
          });
          this.state.characters.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameReset();
        }
      }
        }
          );
        }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>GOT Click Game</Header>
        {this.state.characters.map(character => (
          <Card
            handleCount = {this.handleCount}
            id={character.id}
            key={character.id}
            image={character.image}/>
        ))}
      </Wrapper>);}}

export default App;
