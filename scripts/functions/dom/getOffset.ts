
export default (element: Element) => {
    const rect = element.getBoundingClientRect();

    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
    }
}