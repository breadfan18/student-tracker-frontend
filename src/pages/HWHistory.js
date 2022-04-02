// Components
import HWCard from '../components/HWCard/HWCard';

const HWHistory = props => {
    console.log(props.homework);
    const hwCards = props.homework.map((hw, idx) => <HWCard homework={hw} key={idx}/>)
    return (
        <>
            <h1>{props.user.displayName}'s Homework History</h1>
            {hwCards}
        </>
    )
}

export default HWHistory;