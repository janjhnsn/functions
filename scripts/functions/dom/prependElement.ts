import each from '../util/each';

export default (elements: NodeListOf<Element>, parent: Element) => {
    each(elements, element => {
        parent.insertBefore(element, parent.firstChild);
    });
};