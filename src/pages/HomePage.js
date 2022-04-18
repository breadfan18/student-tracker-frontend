import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';


export default function HomePage({ props }) {
    const [bool, setBool] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('student')))
    const [formState, setFormState] = useState({});

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = Object.assign({}, user, formState)
        console.log(updatedUser._id, 'is  user id')
        let URL = `http://localhost:3001/api/students/${updatedUser._id}`;
        console.log(URL, 'is url')
        fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        }).then(res => res.json())
            .then(student => {
                console.log(student, 'is updated student')
                setUser(student)
                console.log(localStorage, 'is localStorage BEFORE')
                localStorage.setItem('student', JSON.stringify(student))
                console.log(localStorage, 'is local AFTER')
                setBool(!bool)
            }
            ).catch(err => console.log(err))
    }

    useEffect(() => {
        for(let key in user){
            console.log(key, 'is key')
        }
        // check if user profile is complete or not
        console.log(bool, 'is bool')
        console.log(user, 'is user')
    }, [bool, user]);

    return (
        <>
            <h1>HomePage stuff</h1>
            {bool ? <div>
                <h1 style={{ color: 'red' }}>Please complete your profile</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="displayName">
                        Name
                        <input type="text" id='displayName' value={props.user.displayName} onChange={handleChange} />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="text" id='email' value={props.user.email} onChange={handleChange} />
                    </label>
                    <label htmlFor="computer_info">
                        Computer Info
                        <input type="text" id='computer_info' placeholder='2021 Macbook Pro 16GB ram...' value={props.user.computer_info} onChange={handleChange} />
                    </label>
                    <label htmlFor="github_username">
                        Github Username
                        <input type="text" id='github_username' placeholder='Ada Lovelace' value={props.user.github_username} onChange={handleChange} />
                    </label>
                    <label htmlFor="enterprise_username">
                        Github Enterprise Username
                        <input type="text" id='enterprise_username' placeholder='Alan Turing' value={props.user.enterprise_username} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div> : <h1>Welcome {props.user.displayName} your profile is complete</h1>}

        </>
    )
}