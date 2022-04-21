import HomeworkInfo from "../components/Dashboard/HomeworkInfo";
import StudentInfo from "../components/Dashboard/StudentInfo";

const Dashboard = ({ user, homework }) => {
    return (
        <>
            <h1>Student Dashboard</h1>
            <StudentInfo user={user}/>
            <HomeworkInfo homework={homework}/>
        </>
    )
}

export default Dashboard;