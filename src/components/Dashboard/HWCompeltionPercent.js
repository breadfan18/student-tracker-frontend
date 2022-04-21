const HWCompeltionPercent = props => {
    console.log(props)
    return (
        <div style={{border: '1px solid black', borderRadius: '10px'}}>
            <h3>{props.student.homework_completion_percentage}%</h3>
            <h3>Homework Completion Percent</h3>
        </div>
    )
}

export default HWCompeltionPercent;