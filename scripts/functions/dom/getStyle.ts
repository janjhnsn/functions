
export default (element: HTMLElement, property): string => {
    return window.getComputedStyle(element).getPropertyValue(property);
};