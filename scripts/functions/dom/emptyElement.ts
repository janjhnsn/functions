import each from '../util/each';

export default (elements: NodeListOf<Element>) => {
    each(elements, element => {
        element.innerHTML = '';
    });
};