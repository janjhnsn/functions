
export default (name: string): Array<string> => {
    const url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "g"),
        results: Array<string> = [];

    let m;

    while ((m = regex.exec(url)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        results.push(decodeURIComponent(m[2].replace(/\+/g, " ")));
    }

    if (results.length === 0) {
        return undefined;
    }

    return results;
};