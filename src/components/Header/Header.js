import { Link } from 'react-router-dom';
import { logout } from '../../services/firebase';
import Nav from '../Nav/Nav';

const Header = props => (
    <header>
        {
            props.user
                ?
                <>
                    <Link to='/' onClick={logout}>Log Out</Link>
                    <Nav />
                </>
                :
                null
        }
    </header>
)

export default Header;