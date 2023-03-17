import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        mobile: "",
        password: "",
    });

    const [userSavedData, setUserSavedData] = useState([]);


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserLogin({ ...userLogin, [name]: value });
    };


    const getData = () => {
        const newRegister = localStorage.getItem('myData');
        setUserSavedData(JSON.parse(newRegister) ? [...JSON.parse(newRegister)] : userSavedData);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userSavedData)
        userSavedData.map((item) => {
            if (item.mobile === userLogin.mobile && item.password === userLogin.password) {
                navigate('/home')
                alert("LogIn Successfull..");
            }
            else {
                alert("Enter Correct Data...")
            }
        })
    }


    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="login-data">
            <p className="header">LogIn Form</p>

            <form onSubmit={handleSubmit} >
                <div className="form">
                    <label htmlFor="email" className="form__label">Phone : </label>
                    <input
                        type="number"
                        id="mobile"
                        className="input"
                        placeholder="Enter Mobile No..."
                        name="mobile"
                        value={userLogin.mobile}
                        onChange={handleInput}
                    />
                </div>

                <div className="password">
                    <label htmlFor="pasword">Password : </label>
                    <input
                        type="number"
                        id="pasword"
                        className="input"
                        placeholder="Enter Password"
                        name="password"
                        value={userLogin.password}
                        onChange={handleInput}
                    />
                </div>

                <button>Submit</button>
            </form>
            
            <p className="common-para">
                Don't have account yet? <Link to='/register'> Sign Up </Link> here
            </p>
        </div>
    );
};

export default Login