import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './user.sass';
import { UserProfile } from '../../components/UserProfile/';
import { UserProjectList } from '../../components/UserProjectList';

export class UserComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="user-profile-wrap">
          <UserProfile
            user={this.props.user}
          />
          <UserProjectList />
        </div>
      </div>
    );
  };
}

const mapStoreToProps = state => ({
  user: state.user,
});
export const User = withRouter(connect(mapStoreToProps)(UserComponent));
