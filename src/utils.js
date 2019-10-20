import Node from "./models/Node";
import Tree from "./models/Tree";

export function generateTrees(styleguidesData) {
    // build a node dictionary
    const nodeDict = {};
    styleguidesData.forEach(styleguide => {
        const node = new Node(styleguide.id, styleguide.parent, [], styleguide);
        nodeDict[node.id] = node;
    });

    // form childrens
    styleguidesData.forEach(styleguide => {
        if (styleguide.parent) {
            const node = nodeDict[styleguide.id];
            const parentNode = nodeDict[styleguide.parent];
            parentNode.children.push(node);
        }
    });

    const trees = Object.keys(nodeDict).filter(id => !nodeDict[id].parentId).map(id => new Tree(nodeDict[id]));
    return trees;
}