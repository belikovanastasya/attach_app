import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Form } from '../Form';
import { updateUser } from '../../servises/users';
import './userprofile.sass';
import { updateCurrentUser, setFlashMessages } from '../../store';


export class UserProfileComponent extends Component {
  saveUser = (user) => {
    updateUser(user)
      .then((user) => {
        this.props.dispatch(updateCurrentUser(user));
        this.props.dispatch(setFlashMessages({
          isSuccess: true,
          text: 'Your changes saved successfully'
        }));
      })
      .catch(err => this.props.dispatch(setFlashMessages({
        isSuccess: false,
        text: `Can't update ${err}`
      })));
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

const mapStoreToProps = state => ({
  setFlashMessages
});
export const UserProfile = withRouter(connect(mapStoreToProps)(UserProfileComponent));
