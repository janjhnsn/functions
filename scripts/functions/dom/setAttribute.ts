import each from '../util/each'

export default (elements: NodeListOf<Element>, attributeName: string, value: string) => {
    each(elements, element => element.setAttribute(attributeName, value));
}