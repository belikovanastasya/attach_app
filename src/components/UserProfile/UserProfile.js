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
            excluded={['password', 'password_confirm']}
            skipped={['password', 'repeatPassword']}
            disabled={'email'}
            onSubmit={this.saveUser}
            buttonName="save"
            otherFields={{ isDesigner: true, description: true, avatar: true }}
            data={user}
          />
        </div>
        {/* <div className="user-profile_img"><div className="img-holder"><img src={this.props.photo} /></div><input type="file"/></div> */}
      </React.Fragment>
    );
  }
}
