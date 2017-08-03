
export default (url: string, parameter: string, value: string): string => {
    var urlParts = url.split('?');

    if (urlParts.length >= 2) {
        // Get first part, and remove from array
        var urlBase = urlParts.shift();

        // Join it back up
        var queryString = urlParts.join('?');

        var prefix = encodeURIComponent(parameter) + '=';
        var parts = queryString.split(/[&;]/g);

        if  (value !== undefined) {
            prefix += encodeURIComponent(value);
        }

        // Reverse iteration as may be destructive
        for (var i = parts.length; i-- > 0; ) {
            
            // if data sent compare data
            if (prefix.split('=')[1].length > 0) {
                if (parts[i] === prefix) {
                    parts.splice(i, 1);
                }
            // else use starts with idiom
            } else {
                // Idiom for string.startsWith
                if (parts[i].lastIndexOf(prefix, 0) !== -1) {
                    parts.splice(i, 1);
                }
            }
        }

        url = urlBase + '?' + parts.join('&');
    }

    return url;
};