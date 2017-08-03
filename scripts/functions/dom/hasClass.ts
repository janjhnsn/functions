
export default (element: Element, className: string): Boolean => {
    return element.classList.contains(className);
};