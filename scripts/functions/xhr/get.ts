import XHRPromise from './XHRPromise';    

export default (url: string): Promise<string> => {
    return XHRPromise(url, 'GET');
};