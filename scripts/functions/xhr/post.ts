import XHRPromise from './XHRPromise';    

export default (url: string, data: Object, contentType: string): Promise<string> => {
    return XHRPromise(url, 'POST', data, contentType);
};