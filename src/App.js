import React, { Component } from "react";

import Tree from "./components/Tree";
import data from "./data";
import { generateTrees } from "./utils";

import "./App.css";

class App extends Component {
  trees = data.map(generateTrees).flat();

  get roots() {
    return this.trees.filter(tree => tree.isRootTree);
  }

  get branched() {
    return this.trees.filter(tree => !tree.isRootTree);
  }

  render() {
    const sortedTrees = this.branched.sort((a, b) => a.height - b.height);

    return (
      <div class="app">
        <h3>Branched trees</h3>
        <div class="trees">
          {sortedTrees.map(tree => (
            <Tree key={tree.root.id} tree={tree} />
          ))}
        </div>

        <h3>Root trees</h3>
        <div class="trees">
          {this.roots.map(tree => (
            <Tree key={tree.root.id} tree={tree} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
