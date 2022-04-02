const BASE_URL = 'http://localhost:3000/api/students';

function fetchAllStudents() {
    return fetch(`${BASE_URL}`).then(res => res.json())
}

function fetchStudent(id){
    return fetch(`${BASE_URL}/${id}`).then(res => res.json())
}

export {
    fetchAllStudents,
    fetchStudent
}