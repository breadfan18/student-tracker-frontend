const BASE_URL = 'http://localhost:3000/api/homeworks';

// Need to refactor this based on how we write our model
function fetchHomework(studentId) {
    return fetch(`${BASE_URL}/${studentId}`).then(res => res.json())
}

export {
    fetchHomework,
}