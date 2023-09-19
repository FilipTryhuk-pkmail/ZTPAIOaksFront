import '../css/old_css/headers.css'
import '../css/old_css/logout.css'

function LogoutScreen() {
  let user_name = "username_pending"

  return (
  <>
    <title>LOGOUT PAGE</title>
    <section className="logos">
      <div className="logo">
        <img src="../img/logo.svg" alt="Golden Oaks"/>
      </div>
      <div className="logo_subtext">
        <img
            src="../img/logo_2.svg"
            alt="Decentralized Book Exchange"
        />
      </div>
    </section>
    <section className="logout_popup">
      <div className="popup">
        <p id="paragraph1">Logout successful!</p>
        <p id="paragraph2">
          See you soon, {user_name}!
        </p>
      </div>
      <a className="login_button" href="login_2">
        LOG IN
      </a>
    </section>
  </>
  )
}

export default LogoutScreen;