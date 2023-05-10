import { React, useState } from 'react'
import { Post } from '../Services/Post'

const PostModel = "api/Models";
export function PostNewModel() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const [addresLine1, setaddresLine1] = useState("");
    const [addresLine2, setaddresLine2] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [birthDate, setbirthDate] = useState("");
    const [nationality, setNationality] = useState("");
    const [height, setHeight] = useState("");
    const [shoesize, setShoesize] = useState("");
    const [haircolor, setHaircolor] = useState("");
    const [eyecolor, setEyecolor] = useState("");
    const [comments, setComments] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        var object = {
            firstName: firstName,
            lastName: password,
            email: email,
            phoneNo: phoneNo,
            addresLine1: addresLine1,
            addresLine2: addresLine2,
            zip: zip,
            city: city,
            country: country,
            birthDate: birthDate,
            nationality: nationality,
            height: height,
            shoesize: shoesize,
            haircolor: haircolor,
            eyecolor: eyecolor,
            comments: comments,
            password: password

        };

        Post({ object: object, Endpoint: PostModel })
        alert("En manager har oprettet en ny model");

    };

    return (
        <div className="react-hooks-form">
            <h1>Tilføj Model</h1>
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
                    <label id="phoneNo" htmlFor="phoneNo">PhoneNumber</label>
                    <input onChange={(e) => setphoneNo(e.target.value)} type="text" value={phoneNo}></input>
                </div>

                <div>
                    <label id="addresLine1" htmlFor="addresLine1">Adresse1</label>
                    <input onChange={(e) => setaddresLine1(e.target.value)} type="text" value={addresLine1}></input>
                </div>

                <div>
                    <label id="addresLine2" htmlFor="addresLine2">Adresse2</label>
                    <input onChange={(e) => setaddresLine2(e.target.value)} type="text" value={addresLine2}></input>
                </div>

                <div>
                    <label id="zip" htmlFor="zip">Zip</label>
                    <input onChange={(e) => setZip(e.target.value)} type="text" value={zip}></input>
                </div>

                <div>
                    <label id="city" htmlFor="city">City</label>
                    <input onChange={(e) => setCity(e.target.value)} type="text" value={city}></input>
                </div>

                <div>
                    <label id="country" htmlFor="country">Country</label>
                    <input onChange={(e) => setCountry(e.target.value)} type="text" value={country}></input>
                </div>

                <div>
                    <label id="birthDate" htmlFor="birthDate">BirthDate</label>
                    <input onChange={(e) => setbirthDate(e.target.value)} type="Date" value={birthDate}></input>
                </div>

                <div>
                    <label id="nationality" htmlFor="nationality">Nationality</label>
                    <input onChange={(e) => setNationality(e.target.value)} type="text" value={nationality}></input>
                </div>

                <div>
                    <label id="height" htmlFor="height">Height</label>
                    <input onChange={(e) => setHeight(e.target.value)} type="text" value={height}></input>
                </div>

                <div>
                    <label id="shoeSize" htmlFor="shoeSize">ShoeSize</label>
                    <input onChange={(e) => setShoesize(e.target.value)} type="text" value={shoesize}></input>
                </div>

                <div>
                    <label id="hairColor" htmlFor="hairColor">HairColor</label>
                    <input onChange={(e) => setHaircolor(e.target.value)} type="text" value={haircolor}></input>
                </div>

                <div>
                    <label id="eyeColor" htmlFor="eyeColor">EyeColor</label>
                    <input onChange={(e) => setEyecolor(e.target.value)} type="text" value={eyecolor}></input>
                </div>

                <div>
                    <label id="comments" htmlFor="comments">Comments</label>
                    <input onChange={(e) => setComments(e.target.value)} type="text" value={comments}></input>
                </div>

                <div>
                    <label id="password" htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" value={password}></input>
                </div>

                <button type={"submit"} >Opret modellen</button>

            </form>

        </div>
    )

};