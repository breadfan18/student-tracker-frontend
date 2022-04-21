import HomeworkInfo from "../components/Dashboard/HomeworkInfo";
import StudentInfo from "../components/Dashboard/StudentInfo";
import HWCompeltionPercent from "../components/Dashboard/HWCompeltionPercent";
import AttendancePercent from "../components/Dashboard/AttendancePercent";

const Dashboard = ({ user, homework, student }) => {
    return (
        <>
            <h1>Student Dashboard</h1>
            <StudentInfo user={user}/>
            <HomeworkInfo homework={homework}/>
            <HWCompeltionPercent student={student}/>
            <AttendancePercent student={student}/>
        </>
    )
}
export default Dashboard;