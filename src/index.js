import React from "react";
import { render } from "react-dom";

import "../src/stylesheet/style.css";
import Items from "../src/Component/items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Items />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
