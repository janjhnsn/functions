
export default (element: string, isText = false): Element | Text => {
    if (isText) {
        return document.createTextNode(<string>element);
    }
    
    return document.createElement(element);
};