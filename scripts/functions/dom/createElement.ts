
export default (element: string, isText: Boolean): Element | Text => {
    if (isText) {
        return document.createTextNode(<string>element);
    }
    
    return document.createElement(element);
};