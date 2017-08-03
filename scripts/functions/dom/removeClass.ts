import each from '../util/each'

export default (elements: NodeListOf<Element>, className) => {
    each(elements, element => {
        element.classList.remove(className);
    });
};