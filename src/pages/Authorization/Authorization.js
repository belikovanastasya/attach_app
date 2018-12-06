import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../servises';
import { ErrorMsg } from '../../components/ErrorMsg';
import './authrization.sass';
import { setUser, getErrors } from '../../store';

export class AuthorizationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSabmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    login({ email, password })
      .then((res) => {
        this.props.dispatch(setUser(res.user));
        this.props.dispatch(getErrors(null));
        this.setState({ redirectToReferrer: true });
      })
      .catch(err => this.props.dispatch(getErrors(err)));
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({
  //       errors: nextProps.errors
  //     });
  //   }
  // }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, errors } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from.pathname} />;
    }
    return (
      <section className="registration">
        <div className="container">
        {this.props.errors && <ErrorMsg errorMsg={this.props.errors} />}
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
                    onChange={this.handleInputChange}
                    className={this.props.errors ? 'invalid' : ''}
                  />
                </div>
                {/* {errors && <span className="error-text">{errors.email}</span>} */}
                <div className="pass">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                    className={this.props.errors ? 'invalid' : ''}
                  />
                </div>
                {/* {errors && <span className="error-text">{errors.password}</span>} */}
                <a href="#" className="forgotPass-link">Forgot your password?</a>
                <button className="btn signUpBtn">
                  <span>Log In</span>
                </button>
                <span>{'Don\'t have an account?'}</span>
                <NavLink to="./registration" className="signInLink">Sign Up</NavLink>
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

const mapStoreToProps = state => ({
  user: state.user,
  errors: state.errors
});

export const Authorization = connect(mapStoreToProps)(AuthorizationComponent);
