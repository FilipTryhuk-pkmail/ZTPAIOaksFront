import '../css/old_css/headers.css'
import '../css/old_css/logout.css'
import Logo from "../img/logo.svg";
import LogoSmall from "../img/logo_2.svg";
import React from "react";

function LogoutScreen() {
  let user_name = "username_pending"

  return (
  <>
    <title>LOGOUT PAGE</title>
    <section className="logos">
      <div className="logo">
        <img src={Logo} alt="logo"/>
      </div>
      <div className="logo_subtext">
        <img src={LogoSmall} alt="small logo"/>
      </div>
    </section>
    <section className="logout_popup">
      <div className="popup">
        <p id="paragraph1">Logout successful!</p>
        <p id="paragraph2">
          See you soon, {user_name}!
        </p>
      </div>
      <a className="login_button" href="login">
        LOG IN
      </a>
    </section>
  </>
  )
}

export default LogoutScreen;