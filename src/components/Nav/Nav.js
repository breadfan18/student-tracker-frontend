// Built In Components
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <nav>
            <Link>Login</Link>
            <Link>Sign Out</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/hwhistory'>Homeworks</Link>
            <Link to='/hwsubmission'>Submit Homework</Link>
            <Link to='/calendar'>Calendar</Link>
        </nav>
    )
}

export default Nav;