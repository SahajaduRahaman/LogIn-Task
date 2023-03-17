import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const [userRegister, setUserRegister] = useState([]);
    const [user, setUser] = useState({
        name: "",
        mobile: "",
        password: "",
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.name && user.mobile && user.password) {
            setUserRegister([...userRegister, user])
            saveData();
            navigate("/")
            alert("User Register Successful.")
        }

        console.log(userRegister)
    }

    const saveData = () => {
        localStorage.setItem('myData', JSON.stringify(userRegister))
    }

    useEffect(() => {

    }, [userRegister])

    return (
        <div className="register-container">
            <p className="heading">Create Your Account!</p>

            <form onSubmit={ handleSubmit }>
                <div className="name">
                    <label htmlFor="email" >Name : </label>
                    <input
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Enter Your Name..."
                        name="name"
                        value={user.name}
                        onChange={handleInput}
                    />
                </div>

                <div className="mobile">
                    <label htmlFor="mobile">Mobile : </label>
                    <input
                        type="number"
                        id="mobile"
                        className="input"
                        placeholder="Enter Mobile No..."
                        name="mobile"
                        value={user.mobile}
                        onChange={handleInput}
                    />
                </div>

                <div className="form">
                    <label htmlFor="pasword">Password : </label>
                    <input
                        type="password"
                        id="pasword"
                        className="input"
                        placeholder="Enter Password..."
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                    />
                </div>

                <button>Register</button>
            </form>

            <p className="common-para">
                Already have an account with us? <Link to="/" >Login </Link> here
            </p>
        </div>
    );
};

export default Register;