import React, {Component} from 'react';
import Navbar from "./components/Navbar.js"
import images from "./images.json";
import Card from "./components/Card.js";
import Column from "./components/Column.js";
import Container from "./components/Container.js";
import Wrapper from "./components/Wrapper.js";
import Row from "./components/Row.js"

function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    images,
    score: 0,
    topScore: 0,
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ topScore: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages });
  };

  render(){
    return(
      <Wrapper>
        <Navbar
          title="GOT Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <Container>
          <Row>
            {this.state.images.map(image => (
              <Column size="md-3 sm-6">
                <Card
                  key = {image.id}
                  handleClick = {this.handleClick}
                  handleIncrement = {this.handleIncrement}
                  handleReset = {this.handleReset}
                  handleShuffle = {this.handleShuffle}
                  id = {image.id}
                  image = {image.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
