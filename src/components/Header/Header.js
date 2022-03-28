import { Link } from 'react-router-dom';
import { logout } from '../../services/firebase';

// Components
import Nav from '../Nav/Nav';

const Header = props => (
    <header>
        {
            props.user ? 
                <Link to='/' onClick={logout} style={{color: 'white'}}>Log Out</Link>
            :
            null
        }    
        <Nav />
    </header>
)

export default Header;