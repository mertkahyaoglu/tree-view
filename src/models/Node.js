export default class Node {
    constructor(id, parentId, children, data) {
        this.id = id;
        this.parentId = parentId;
        this.children = children || [];
        this.data = data;
    }

    get isRoot() {
        return !this.parentId;
    }

    get isLeaf() {
        return this.children.length === 0;
    }

    get isArchived() {
        return !!this.data.archived;
    }
}