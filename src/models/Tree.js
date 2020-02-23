import { getLevels } from "../utils";

export default class Tree {
    constructor(root) {
        this.root = root;
        this.levels = getLevels(root, 1);
    }

    get height() {
        return Object.keys(this.levels).length + 1;
    }

    get isRootTree() {
        return this.root.isLeaf;
    }
}