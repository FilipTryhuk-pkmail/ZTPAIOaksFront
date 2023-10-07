import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import '../css/old_css/style.css'
import Logo from "../img/logo.svg"
import LogoSmall from "../img/logo_2.svg"

function LoginScreen() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const base64Credentials = btoa(`${login}:${password}`);

        fetch("http://localhost:8080/token", {
            method: "POST",
            headers: {
                "Authorization": `Basic ${base64Credentials}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: login, password: password})
        })
            //.then((response) => response.json())
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Handle the JSON response data here
                navigate("/history", { state: { username: login } });
                setErrorMessage("");
            })
            .catch((error) => {
                console.error("Error:", error);
                //console.log(login, password);
            });

    }

    return (
    <>
        <title>LOGIN PAGE</title>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="logo_subtext">
                <img src={LogoSmall} alt="small logo"/>
            </div>
            <div className="login-container">
            <form onSubmit={onFormSubmit}>
                    <div className="login_info">Log in to the site</div>
                    <div className="login_password">user login</div>
                    <input
                        name="email"
                        type="text"
                        placeholder="your.email@here"
                        style={{
                            border: "1px solid #000000",
                            borderRadius: 30,
                            backgroundColor: "transparent",
                            padding: "0.25em",
                            margin: "0.25em",
                            fontFamily: '"Ubuntu"',
                            fontStyle: "normal",
                            color: "rgba(0, 0, 0, 1)"
                        }}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <div className="login_password">password</div>
                    <input
                        name="password"
                        type="password"
                        placeholder="**********"
                        style={{
                            border: "1px solid #000000",
                            borderRadius: 30,
                            backgroundColor: "transparent",
                            padding: "0.25em",
                            marginTop: "0.25em",
                            color: "rgba(0, 0, 0, 1)"
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p style={{ color:"red" }}>{errorMessage}</p>
                    <button type="submit" className="button_text">CONTINUE</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default LoginScreen;