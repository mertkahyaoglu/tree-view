import Level from "./Level";

/**
 * Returns an object with level keys and values of child nodes at that level
 */
function getLevels(parentNode, depth, levels) {
    if(parentNode.children.length > 0) {
        levels[depth] = (levels[depth] || []).concat(parentNode.children)
        parentNode.children.forEach(child => {
            getLevels(child, depth + 1, levels)
        })
    }

    return Object.keys(levels).map(key => new Level(Number(key), levels[key]));
}

export default class Tree {
    constructor(root) {
        this.root = root;
        this.levels = getLevels(root, 1, {});
    }

    get height() {
        return Object.keys(this.levels).length + 1;
    }

    get isRootTree() {
        return this.root.isLeaf;
    }

    get isArchived() {
        return this.root.isArchived;
    }
}