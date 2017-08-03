
export default (selector: string, parent?: Element): NodeListOf<HTMLElement> => {
    if (!parent) {
        parent = document.documentElement;
    }

    if (selector.indexOf(' ') === -1 && selector.indexOf(':') === -1) {
        if (selector.lastIndexOf('.') === 0) {
            return <NodeListOf<HTMLElement>>parent.getElementsByClassName(selector.substring(1));
        } 
        
        if (selector.lastIndexOf('#') === 0) {
            return <any>document.getElementById(selector.substring(1));
        }
    }

    return <NodeListOf<HTMLElement>>parent.querySelectorAll(selector);
}