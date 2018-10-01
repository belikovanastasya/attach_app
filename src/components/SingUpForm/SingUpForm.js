import { createUser } from '../../servises'
export class SingUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
    }
  }
  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state
    console.log(email)
    createUser({ email: email, password: password })
      .then(user => {
        this.props.dispatch(setUser(user));
        //this.setState({ redirectToReferrer: true });
      })
      .catch((err) => console.log('Can\'t login', err))
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
              value={this.state.username}
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
              name="passwordConfirmation"
              placeholder="Repeat password"
              value={this.state.repeatPassword}
              onChange={this.onChange}
            />
        </div>
        <button className="btn signUpBtn">
          <span>Sign Up</span>
        </button>
        <span className="warn">By clicking “Sign Up”, you agree to our <a href="#">terms of service</a> and <a href="#">privacy statement</a>. We’ll occasionally send you account related emails.</span>
      </div>
    </form>
    )
  }
}