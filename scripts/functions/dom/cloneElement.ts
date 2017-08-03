
export default (element: Element): Element => {
    return element.cloneNode(true) as Element;
};