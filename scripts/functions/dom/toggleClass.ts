import each from '../util/each'

export default (elements: NodeListOf<Element>, className: string) => {
    each(elements, element => element.classList.toggle(className));
};