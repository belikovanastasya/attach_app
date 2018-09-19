import './authrization.sass';
import { NavLink } from 'react-router-dom'



export class Authorization extends React.Component{
  constructor(props) {
    super(props);
    this.props.onLogin();
  }

  onSabmit = (e) => {
    e.preventDefault();
    this.props.onLogin(true);
}

render() {
  return (
    <section className="registration">
      <div className="container">
        <div className="registration_wrap">
          <form
            onSubmit={this.onSabmit}
          >
            <div className="registration-template autorize-template active">
              <div className="email">
                <input type="text" placeholder="E-mail" name="email"/>
              </div>
              <div className="pass">
                <input type="password" name = "password" placeholder="Password" />
              </div>
              <a href="#" className="forgotPass-link">Forgot your password?</a>
              <button className="btn signUpBtn">
                <span>Log In</span>
              </button>
              <span>Don't have an account?</span>
              <NavLink to='./registration' className="signInLink">Sign Up</NavLink>
              
              <a href="#" ></a>
              <span>or</span>
              <button type="submit" className="fbSignUp">Sign Up with facebook</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
}



