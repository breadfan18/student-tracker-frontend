import { studentLogin, instructorLogin } from '../../services/firebase';
import { useState } from 'react';
const STUDENT_ACCESS_CODE = process.env.REACT_APP_STUDENT_ACCESS_CODE || 'abc';
const INSTRUCTOR_ACCESS_CODE = process.env.REACT_APP_INSTRUCTOR_ACCESS_CODE || 'def';

const Login = (props) => {
    console.log(props,'are login props')
    const [userCode, setUserCode] = useState('');
    
    const handleChange = (e) => {
        setUserCode(e.target.value);
    }

    return (
        <div>
            <article>
                <h1 style={{textDecoration: 'none'}}>Welcome</h1>
                <p>Please sign in to play GA Students App</p>
                <br />
                <br />
                <input hidden={userCode === STUDENT_ACCESS_CODE || userCode === INSTRUCTOR_ACCESS_CODE ? true : false} type="text" placeholder='Enter access code'  onChange={handleChange} />
                <button hidden={userCode === STUDENT_ACCESS_CODE ? false : true} onClick={()=>studentLogin(props)}>Student login with Google</button>
                <button hidden={userCode === INSTRUCTOR_ACCESS_CODE ? false : true} onClick={instructorLogin}>Instructor login with Google</button>
            </article>
        </div>
    )
}

export default Login;