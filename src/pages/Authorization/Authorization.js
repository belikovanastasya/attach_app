import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../servises';
import './authrization.sass';
import { setUser } from '../../store';

export class AuthorizationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReffer: false
    }
  }

  onSabmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target
    login({ email: email.value, password: password.value })
      .then(user => {
        this.props.dispatch(setUser(user));
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => console.log('Can\'t login', err))

  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from.pathname} />;
    }
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
                    defaultValue="admin@a.com" />
                </div>
                <div className="pass">
                  <input
                    type="password"
                    name="password"
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

const mapStoreToProps = state =>({
  user: state.user
  })

export const Authorization =  connect(mapStoreToProps)(AuthorizationComponent);