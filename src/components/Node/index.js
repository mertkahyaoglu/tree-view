import React from 'react'

import classnames from "classnames";

import "./style.css";

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
      <div ref={this.handleRef} class={classes}>{id}</div>
    );
  }
}
