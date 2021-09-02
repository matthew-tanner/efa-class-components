import React, { Component } from "react";
import { Input } from "reactstrap";

class SearchIndex extends Component {
  state = {
    things: [
      "pen",
      "marker",
      "eraser",
      "notebook",
      "pencil",
      "scissors",
      "highlighter",
      "stapler",
      "paper clip",
      "binder",
      "hole punch",
      "laminator",
      "laminating sheets",
      "protective sheets",
      "index cards",
    ],
    searchedThings: [],
    search: ""
  };

  searchFunction(e) {
    e.preventDefault();
    this.setState({search: e.target.value.toLowerCase()});
    
    const found = this.state.things.filter((thing) => {
      return thing.toLowerCase().includes(this.state.search)
    })
    this.setState({searchedThings: found})
  }

  render() {
    return (
      <div>
        <Input placeholder="Search Here" onChange={(e) => this.searchFunction(e)} />
        <h3>Results:</h3>
        <ul>
          {
            this.state.searchedThings.length > 0 ? this.state.searchedThings.map((x) => <li key={x}>{x}</li>): this.state.things.map((y) => <li key={y}>{y}</li>)
          }
        </ul>
      </div>
    );
  }
}
export default SearchIndex;
