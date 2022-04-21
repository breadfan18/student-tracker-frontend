const StudentInfo = props => {
    return (
        <>
            <h3>Student Info</h3>
            <p>{props.user.displayName}</p>
            <p>{props.user.email}</p>
            <img src={props.user.photoURL} alt="" />
        </>
    )
}

export default StudentInfo;