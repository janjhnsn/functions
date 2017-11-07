import getBoundingRect from '../dom/getBoundingRect';

export default (element: Element) => {
    const rect = getBoundingRect(element);

    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
    }
}