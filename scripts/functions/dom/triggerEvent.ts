import each from '../util/each';

export default (elements: NodeListOf<Element> | Element, eventName: string) => {
    each([elements], element => {
        // modern browsers, IE9+
        var e = document.createEvent("HTMLEvents");
        e.initEvent(eventName, false, true);
        element.dispatchEvent(e);
    });
};