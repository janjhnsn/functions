import each from '../util/each';

export default (elements: NodeListOf<Element>, classNames: Array<string>) => {
    each(elements, element => {
        each(classNames, className => {
            element.classList.add(className);  
        });
    });
};