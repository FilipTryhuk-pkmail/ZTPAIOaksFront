import '../css/old_css/style.css'
import Logo from "../img/logo.svg"
import LogoSmall from "../img/logo_2.svg"

function LoginScreen() {
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
                <form className="login_2" action="login_2" method="POST">
                    <div className="message">
                        {/*?php
                  if(isset($messages)) {
                      foreach ($messages as $message) {
                          echo $message;
                      }
                  }
              ?*/}
                    </div>
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
                    />
                    <button type="submit">
                        <div className="button_text">CONTINUE</div>
                    </button>
                </form>
            </div>
        </div>
    </>
    )
}

export default LoginScreen;