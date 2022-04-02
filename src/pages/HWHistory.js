// Components
import HWCard from '../components/HWCard/HWCard';

const HWHistory = (props) => {
    return (
        <>
            <h1>{props.user.displayName}'s Homework History</h1>
            <HWCard />
        </>
    )
}

export default HWHistory;