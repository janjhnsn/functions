export default (elements: NodeListOf<any> | Array<any>, callback: Function) => {
    Array.prototype.forEach.call(elements, callback);
};