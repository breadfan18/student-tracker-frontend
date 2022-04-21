const StudentInfo = props => {
    return (
        <>
            <h3>Student Info</h3>
            <img src={props.user.photoURL} alt="" style={{borderRadius: '50%'}}/>
            <p>{props.user.displayName}</p>
            <p>{props.user.email}</p>
        </>
    )
}

export default StudentInfo;