import './Registration.sass';
export class Registration extends React.Component{
  constructor(props) {
    super(props)
  }

render() {
  return (
    <section className="registration">
      <div className="container">
        <div className="registration_wrap">
          <form>
            <div className="registration-template none-aithorize-template active ">
              <div className="email">
                <input type="text" placeholder="E-mail" name="email" />
              </div>
              <div className="pass">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="pass-rp">
                <input type="password" name="pass-rp"  placeholder="Repeat password" />
              </div>
              <button className="btn signUpBtn">
                <span>Sign Up</span>
              </button>
              <span className="warn">By clicking “Sign Up”, you agree to our <a href="#">terms of service</a> and <a href="#">privacy statement</a>. We’ll occasionally send you account related emails.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
}



