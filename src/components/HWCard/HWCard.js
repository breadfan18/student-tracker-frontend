const HWCard = ({ homework }) => {
    return (
        <article>
            <h2>{homework.assignment}</h2>
            <p>{homework.due_date}</p>
            <p>{homework.completed ? 'Completed' : 'Not Completed'}</p>
            <a href="/">Repo Link</a>
        </article>
    )
}

export default HWCard;