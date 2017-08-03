import each from '../util/each';

export default (elements: NodeListOf<Element>, attributeName: string) => {
    each(elements, element => {
        return element.removeAttribute(attributeName);
    });
};