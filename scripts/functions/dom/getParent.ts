
const getParent = (element: Element, className: string): Element => {
    const parentElement = <Element>element.parentNode;
    if (className === undefined || parentElement.classList.contains(className)) {
        return parentElement;
    }

    return getParent(parentElement, className);
};

export default getParent;