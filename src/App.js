import React, { Component } from 'react';

import Tree from "./components/Tree";
import { generateTrees } from "./utils";
import styleguidesData0 from "./data/styleguides0";
import styleguidesData1 from "./data/styleguides1";
import styleguidesData2 from "./data/styleguides2";
import styleguidesData3 from "./data/styleguides3";
import styleguidesData4 from "./data/styleguides4";
import styleguidesData5 from "./data/styleguides5";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.trees = [
      generateTrees(styleguidesData0),
      generateTrees(styleguidesData1),
      generateTrees(styleguidesData2),
      generateTrees(styleguidesData3),
      generateTrees(styleguidesData4),
      generateTrees(styleguidesData5)
    ].flat();
  }

  handleResize = () => {
    if (this.rootTreesNode && this.appNode) {
      if (this.appNode.clientWidth < this.appNode.scrollWidth) {
        this.rootTreesNode.style.flexWrap = "nowrap";
      } else {
        this.rootTreesNode.style.flexWrap = "wrap";
      }  
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const roots = [];
    const trees = [];
    const archivedTrees = [];
    for (const tree of this.trees) {
      if (tree.isArchived) {
        archivedTrees.push(tree);
      } else if (tree.isRootTree) {
        roots.push(tree);
      } else {
        trees.push(tree);
      }
    }

    const sortedTrees = trees.sort((a, b) => b.height - a.height);
    const sortedArchivedTrees = archivedTrees.sort((a, b) => b.height - a.height);

    return (
      <div ref={el => this.appNode = el} class="App">
        <div class="trees">
          {sortedTrees.map(tree => <Tree key={tree.root.id} tree={tree}/>)}
        </div>
        {roots.length > 0 && (
          <div ref={el => this.rootTreesNode = el} class="rootTrees">
            <div class="trees">
              {roots.map(tree => <Tree key={tree.root.id} tree={tree}/>)}
            </div>
          </div>
        )}
        {archivedTrees.length > 0 && (
          <div class="archivedTrees">
            <h3>Archived Trees</h3>
            <div class="trees">
              {sortedArchivedTrees.map(tree => <Tree key={tree.root.id} tree={tree}/>)}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
