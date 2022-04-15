import { Link } from 'react-router-dom';
import { logout } from '../../services/firebase';
import Nav from '../Nav/Nav';

const Header = props => {
    // console.log(props, 'are header props')
    return (
        <header>
            {
                props.user
                    ?
                    <>
                        <Link to='/' onClick={logout}>Log Out {props.user.displayName}</Link>
                        <Nav />
                    </>
                    :
                    null
            }
        </header>
    )
}

export default Header;