
export default (url: string, requestMethod: string, data?: Object, contentType?: string): Promise<string> => {
    // Create new promise with the Promise() constructor;
    // This has as its argument a function
    // with two parameters, resolve and reject
    return new Promise<string>((resolve, reject) => {
        // Standard XHR to load a resource
        const request = new XMLHttpRequest();
        url = encodeURI(url);
        request.open(requestMethod, url);
        
        if (contentType !== undefined) {
            request.setRequestHeader("Content-Type", contentType);
        }

        const error = { isResponseData: false, message: "" };

        // When the request loads, check whether it was successful
        request.onload = () => {
            var status = request.status;
            if (status === 200) {
                // If successful, resolve the promise by passing back the request response
                resolve(request.response);
            } else if (status === 500) {
                error.message = 'There was an server error';
            } else {
                error.message = request.statusText;
                error.isResponseData = true;
            }
                reject(error);
        };
        request.onerror = () => {
            // Also deal with the case when the entire request fails to begin with
            // This is probably a network error, so reject the promise with an appropriate message
            
            error.message = 'There was a network error.';

            reject(error);
        };
        
        if (data === undefined) {
            data = {};
        }

        // Send the request
        request.send(data);
    });
};