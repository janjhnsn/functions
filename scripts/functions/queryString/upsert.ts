
export default (url: string, name: string, value: string): string => {
    var re = new RegExp("([?&])" + name + "=.*?(&|$)", "i");
    var separator = url.indexOf('?') !== -1 ? "&" : "?";
    if (url.match(re)) {
        return url.replace(re, '$1' + name + "=" + value + '$2');
    } else {
        return url + separator + name + "=" + value;
    }
};