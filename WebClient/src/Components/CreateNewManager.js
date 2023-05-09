import { React, useState } from 'react'
import { Post } from '../Services/Post'


const Post_Manager = "api/Managers";
export function CreateNewManager() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        var object = {
            firstName: firstName,
            lastName: password,
            email: email,
            password: password

        };

        Post({ object: object, Endpoint: Post_Manager })
        alert("En manager har oprettet en ny Manager");

    };

    return (
        <div className="react-hooks-form">
            <h1>Tilføj ny Manager</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label id="firstname" htmlFor="firstName">FirstName</label>
                    <input onChange={(e) => setfirstName(e.target.value)} type="text" value={firstName}></input>
                </div>

                <div>
                    <label id="lastname" htmlFor="lastName">LastName</label>
                    <input onChange={(e) => setlastName(e.target.value)} type="text" value={lastName}></input>
                </div>

                <div>
                    <label id="email" htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" value={email}></input>
                </div>


                <div>
                    <label id="password" htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" value={password}></input>
                </div>

                <button type={"submit"} >Opret Manager</button>

            </form>

        </div>
    )

};