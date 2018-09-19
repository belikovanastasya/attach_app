import './authrization.sass';
import { NavLink } from 'react-router-dom'



export class Authorization extends React.Component{
  constructor(props) {
    super(props);
  }

  onSabmit = (e) => {
    e.preventDefault();

    const{ email, password} = e.target

    fetch('http://localhost:8086/public/login', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers:{
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ email: email.value, password: password.value })
  })
  .then(data => data.json())
  .then(user => {
    this.props.onLogin(user)
    })
  .catch((err) => console.log('Can\'t login', err))
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
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  defaultValue="admin@a.com"/>
              </div>
              <div className="pass">
                <input
                  type="password"
                  name = "password"
                  placeholder="Password"
                  defaultValue="admin"
                   />
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


