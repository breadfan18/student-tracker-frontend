import { login } from '../../services/firebase';

const Login = () => {
    return (
        <div>
            <article>
                <h1 style={{textDecoration: 'none'}}>Welcome</h1>
                <p>Please sign in to play GA Students App</p>
                <br />
                <br />
                <button onClick={login}>Login with Google</button>
            </article>
        </div>
    )
}

export default Login;