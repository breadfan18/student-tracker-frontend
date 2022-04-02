// Components
import HWCard from '../components/HWCard/HWCard';

const HWHistory = props => {
    console.log(props.homework);
    const hwCards = props.homework.map(hw => <HWCard homework={hw} />)
    return (
        <>
            <h1>{props.user.displayName}'s Homework History</h1>
            {hwCards}
        </>
    )
}

export default HWHistory;