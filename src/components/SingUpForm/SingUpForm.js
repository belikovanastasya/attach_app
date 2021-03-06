import { createUser } from '../../servises';

export class SingUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirm: '',
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password, password_confirm } = this.state;
    createUser({ email, password, password_confirm })
      .then((user) => {
        this.props.dispatch(createUser(user));
      })
      .catch(err => console.log('Can\'t login', err))
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="registration-template none-aithorize-template active ">
          <div className="email">
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className="pass">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div className="pass-rp">
            <input
              type="password"
              name="password_confirm"
              placeholder="Repeat password"
              value={this.state.repeatPassword}
              onChange={this.onChange}
            />
          </div>
          <button className="btn signUpBtn">
            <span>Sign Up</span>
          </button>
          <span className="warn">By clicking “Sign Up”, you agree to our
          <a href="#">terms of service</a>
            and
           <a href="#">privacy statement</a>.
             We’ll occasionally send you account related emails.
          </span>
        </div>
      </form>
    );
  }
}
