import '../css/old_css/headers.css'
import '../css/old_css/register.css'

function RegisterScreen() {

  return (
  <>
    <title>REGISTER</title>
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
    <section className="registration_container">
      <h1>Register</h1>
      <form className="register" action="register" method="POST">
        <div className="messages">
          {/*?php
          if(isset($messages)){
              foreach($messages as $message) {
                  echo $message;
              }
          }
          ?*/}
        </div>
        <input
            id="input_fields"
            name="email"
            type="text"
            placeholder="email@email.com"
        />
        <input
            id="input_fields"
            name="password"
            type="password"
            placeholder="password"
        />
        <input id="input_fields" name="name" type="text" placeholder="name"/>
        <input
            id="input_fields"
            name="surname"
            type="text"
            placeholder="surname"
        />
        <button type="submit">REGISTER</button>
      </form>
    </section>
  </>
  )
}

export default RegisterScreen;