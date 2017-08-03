import parse from './parse';

export default (str: string): Element => {
    return parse(str, "text/xml").documentElement;
};