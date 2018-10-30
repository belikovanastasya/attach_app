
export const setAuthToken = token => {
    let headers = {"Content-type": "application/json; charset=utf-8"};
    if(token) {
        headers["Authorization"] = token;
    }
    return headers;
}

