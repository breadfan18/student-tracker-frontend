import { Link } from 'react-router-dom';
import { logout } from '../services/firebase';

const Header = props => (
    <header>
        {
            props.user ? 
                <Link to='/' onClick={logout}>Log Out</Link>
            :
            null
        }    
    </header>
)

export default Header;