import React, { Component } from 'react';
import { Form } from '../Form';
import { updateUser } from '../../servises/users';
import './userprofile.sass';


export class UserProfile extends Component {
  saveUser = (user) => {
    updateUser(user)
      .then(() => this.props.dispatch(updateUser(user)))
      .catch(err => console.log('Can\'t update', err));
  };
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <div className="user-profile__main">
          <Form
            skipped={['password', 'password_confirm']}
            excluded={['password', 'password_confirm']}
            disabled={['email']}
            onSubmit={this.saveUser}
            buttonName="save"
            otherFields={{ isDesigner: true, description: true }}
            data={user}
          />
        </div>
      </React.Fragment>
    );
  }
}
