import React from 'react';

import Lines from "../Lines";
import Node from "../Node";

import "./style.css";

function groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

// forms an object that groups nodes with their weights by their parentId
function prepareNodes(levelNodes) {
  const levelNodesByParentId = groupBy(levelNodes, "parentId");
  const levelNodesArr = Object.values(levelNodesByParentId);
  const sortedLevelNodesArr = levelNodesArr.sort((a,b) => b.length - a.length);

  let reversedIndex = -1;
  return sortedLevelNodesArr.reduce((acc, cur, index, arr) => {
    const parentId = cur[0].parentId;

    // swap weights of parents with the same amount of children if they are in the first half of the level
    if (reversedIndex === -1) {
      const restHaveSameAmountOfChild = arr[index + 1] && cur.length === arr[index + 1].length;
      if (restHaveSameAmountOfChild) {
        const lastNodes = arr[arr.length - 1];
        const lastItemInNodes = lastNodes[lastNodes.length - 1];
        const lastChildIndexInLevel = levelNodes.map(node => node.id).indexOf(lastItemInNodes.id);
        const inFirstHalf = lastChildIndexInLevel < levelNodes.length / 2;
        if (inFirstHalf) {
          reversedIndex = index;
        }
      }
    }

    let weight;
    if (reversedIndex !== -1) {
      weight = index - reversedIndex + 1;
    } else {
      weight = arr.length - index;
    }

    acc[parentId] = {
      weight,
      nodes: levelNodesByParentId[parentId]
    }

    return acc;
  }, {});
}

export default class Tree extends React.Component {
  constructor(props) {
    super(props);

    this.nodeRefs = {};

    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  handleNodeRef = (id, el) => {
    this.nodeRefs[id] = el;
  }

  renderLevels() {
    const { mounted } = this.state;
    const { tree } = this.props;

    const rootLevel = (
      <div class="level" key="root">
        <Node onRef={this.handleNodeRef} node={tree.root}/>
      </div>
    );

    const otherLevels = tree.levels.map((level, i) => {
      const nodesMap = prepareNodes(level.nodes);
      const totalWeight = Object.keys(nodesMap).length;
      return (
        <div class="level" key={i}>
          {Object.entries(nodesMap).map(([parentId, nodeObj]) => {
            const nodeRefs = nodeObj.nodes.map(node => this.nodeRefs[node.id]);
            const parentNodeRef = this.nodeRefs[parentId];
            return [
              mounted && parentNodeRef && (
                  <Lines
                    totalWeight={totalWeight}
                    weight={nodeObj.weight}
                    nodeRefs={nodeRefs}
                    parentNodeRef={parentNodeRef}/>
              ),
              <div class="nodes">
                  {nodeObj.nodes.map(node => <Node key={node.id} onRef={this.handleNodeRef} node={node}/>)}
              </div>
            ]
          })}
        </div>
      )
    });

    return [
      rootLevel,
      otherLevels
    ]
  }

  render() {
    const { tree } = this.props;

    if (tree.isRootTree) {
      return <Node node={tree.root}/>
    }

    return (
      <div class="tree">
        {this.renderLevels()}
      </div>
    );
  }
}
