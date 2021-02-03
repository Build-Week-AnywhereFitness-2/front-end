// Fetches and returns token from local storage
function fetchToken() {
    const token = localStorage.getItem('token');
    return token;
}

export default fetchToken;