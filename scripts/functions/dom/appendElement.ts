import each from '../util/each';

export default (elements: NodeListOf<Element> | Element, parent: Element) => {
    each([elements], e => {
        parent.appendChild(e);
    });
};