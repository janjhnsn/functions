import each from '../util/each';

export default (elements: NodeListOf<Element>, parent: Element) => {
    each(elements, e => {
        parent.appendChild(e);
    });
};