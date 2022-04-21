const HomeworkInfo = props => {
    const hwDetails = props.homework.map((hw, idx) => {
        return (
            <div style={{border: '1px solid black'}}>
                <h5>{hw.assignment}</h5>
                <p>{hw.completed ? 'Completed' : 'Late'}</p>
            </div>
        )
    })
    return (
        <>
            <h3>Homework Info</h3>
            {hwDetails}
        </>
    )
}

export default HomeworkInfo;