import { login } from '../../services/firebase';

const Login = () => {
    return (
        <div>
            <article>
                <h4 style={{textDecoration: 'none'}}>Welcome</h4>
                <h6>Please sign in to play GA Students App</h6>
                <br />
                <br />
                <button onClick={login}>Login with Google</button>
            </article>
        </div>
    )
}

export default Login;