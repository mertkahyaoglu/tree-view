import React from 'react'
import classnames from "classnames";

import { NODE_WIDTH, NODE_HEIGHT } from '../../constants';

import "./style.css";

const nodeStyle = { width: NODE_WIDTH, height: NODE_HEIGHT };

export default class Node extends React.Component {
  handleRef = (el) => {
    const { onRef, node: { id } } = this.props;
    if (onRef) {
      onRef(id, el);
    }
  }

  render() {
    const { node: { id, parentId } } = this.props;
    const classes = classnames("node", { hasParent: !!parentId })

    return (
      <div
        style={nodeStyle}
        ref={this.handleRef}
        class={classes}>{id}</div>
    );
  }
}
