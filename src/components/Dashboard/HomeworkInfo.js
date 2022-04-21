const HomeworkInfo = props => {
    const hwDetails = props.homework.map((hw, idx) => {
        return (
            <div style={{
                border: '1px solid black',
                maxWidth: '25rem',
                minWidth: '20rem',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                backgroundColor: 'gray',
                color: 'white',
                margin: '5px'
            }} key={idx}>
                <h3>{hw.assignment}</h3>
                <p>{hw.completed ? 'Completed' : 'Late'}</p>
            </div>
        )
    })
    return (
        <>
            <h3>Homework Info</h3>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>{hwDetails}</section>
        </>
    )
}

export default HomeworkInfo;