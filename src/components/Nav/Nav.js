// Built In Components
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <nav>
            <Link>Login</Link>
            <Link>Sign Out</Link>
            <Link>Dashboard</Link>
            <Link>Homeworks</Link>
            <Link>Submit Homework</Link>
            <Link>Calendar</Link>
        </nav>
    )
}

export default Nav;