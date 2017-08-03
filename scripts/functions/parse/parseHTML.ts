import parse from './parse';

export default (str: string): HTMLCollection => {
    return parse(str, "text/html").body.children;
};