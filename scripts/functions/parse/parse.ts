
export default (str: string, type: string): Document => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, type);
    return doc;
};