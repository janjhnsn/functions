import each from '../util/each';

export default (elements: NodeListOf<Element>, eventNames: Array<string>, callback: Function) => {
    each(elements, element => {
        eventNames.forEach(eventName => {
            element.addEventListener(eventName, callback);
        });
    });
};