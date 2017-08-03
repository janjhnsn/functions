
export default (element: HTMLElement, property, value) => {
    if (value) {
        element.style[property] = value;
    }
};