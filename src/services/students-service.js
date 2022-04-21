const BASE_URL = 'http://localhost:3001/api/students';

function fetchAllStudents() {
    return fetch(`${BASE_URL}/all`).then(res => res.json())
}

function fetchStudent(uid){
    return fetch(`${BASE_URL}?uid=${uid}`).then(res => res.json())
}

export {
    fetchAllStudents,
    fetchStudent
}