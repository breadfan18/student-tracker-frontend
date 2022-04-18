const BASE_URL = 'http://localhost:3001/api/homeworks';

// Need to refactor this based on how we write our model
function fetchHomework() {
    return fetch(`${BASE_URL}`).then(res => res.json())
}

// testing again
export {
    fetchHomework,
}