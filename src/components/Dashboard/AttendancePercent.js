const AttendancePercent = props => {
    return (
        <div style={{border: '1px solid black', borderRadius: '10px'}}>
            Tardies: <h3>{props.student.tardies}</h3>
            Absences: <h3>{props.student.absences}</h3>
        </div>
    )
}

export default AttendancePercent;