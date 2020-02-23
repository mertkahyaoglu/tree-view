import Node from "./models/Node";
import Tree from "./models/Tree";
import Level from "./models/Level";

export function generateTrees(treeData) {
    // build a node dictionary
    const nodeDict = {};
    treeData.forEach(nodeData => {
        const node = new Node(nodeData.id, nodeData.parent, [], nodeData);
        nodeDict[node.id] = node;
    });

    // form childrens
    treeData.forEach(nodeData => {
        if (nodeData.parent) {
            const node = nodeDict[nodeData.id];
            const parentNode = nodeDict[nodeData.parent];
            parentNode.children.push(node);
        }
    });

    return Object
        .keys(nodeDict)
        .filter(id => !nodeDict[id].parentId)
        .map(id => new Tree(nodeDict[id]));
}

/**
 * Returns an object with level keys and values of child nodes at that level
 */
export function getLevels(parentNode, depth, levels = {}) {
    if(parentNode.children.length > 0) {
        levels[depth] = (levels[depth] || []).concat(parentNode.children)
        parentNode.children.forEach(child => {
            getLevels(child, depth + 1, levels)
        })
    }

    return Object.keys(levels).map(key => new Level(Number(key), levels[key]));
}

/**
 * Returns an object from an array of objects grouped by given key
 */
export function groupBy(xs, key) {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }