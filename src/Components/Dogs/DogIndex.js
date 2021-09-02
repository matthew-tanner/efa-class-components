import React, { Component } from "react";

class DogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      error: false,
    };
  }

  getRandomImage() {
    this.setState({ error: false });
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.message.includes(".jpg")) {
          this.setState({ imageUrl: data.message });
        } else {
          this.setState({ error: true });
        }
      });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.getRandomImage()}>Get New Image</button>
        </div>
        <hr />
        <div>
          {this.state.imageUrl.includes(".jpg") ? (
            <img src={this.state.imageUrl} alt="random" />
          ) : (
            <></>
          )}
        </div>
        <div>{this.state.error ? <h3>An error occured, click the button again...</h3> : <></>}</div>
      </div>
    );
  }
}

export default DogIndex;
