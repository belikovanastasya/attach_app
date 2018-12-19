import React from 'react';
import './user.sass';


export class  User extends React.Component {
  render() {
    return (
      <div className="user-profile-wrap">
      <form>
        <div className="user-profile__main">
          <input disabled />
        </div>
      </form>
    </div>
    )
  }
}
