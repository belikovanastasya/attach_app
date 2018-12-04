import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Registration.sass';
import { Form } from '../../components/Form';
import { ErrorMsg } from '../../components/ErrorMsg';
import { createUser } from '../../servises/users';
import { setUser, getErrors } from '../../store';

export class RegistrationComponent extends React.Component {
  create = (user) => {
    createUser({ email: user.email, password: user.password, password_confirm: user.password_confirm })
      .then(user => {
        this.props.dispatch(setUser(user));
        this.props.history.push('/user');
        this.props.dispatch(getErrors(null));
      })
      .catch(err => this.props.dispatch(getErrors(err)));
  }
  clearErrors = () => {
    this.props.dispatch(getErrors(null));
  }
  render() {
    return (
      <section className="registration">
        <div className="container">
          {this.props.errors && <ErrorMsg errorMsg={this.props.errors} />}
          <div className="registration_wrap">
            <Form
              excluded={['firstName', 'lastName', 'description']}
              onSubmit={this.create}
              buttonName="signUp"
              clearErrors={this.clearErrors}
            />
            <span className="warn">By clicking “Sign Up”, you agree to our
              <a href="#">terms of service</a> and <a href="#">privacy statement</a>.
             We’ll occasionally send you account related emails.
            </span>
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
export const Registration = withRouter(connect(mapStoreToProps)(RegistrationComponent));
