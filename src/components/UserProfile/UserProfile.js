import { React } from 'react';
import { Form } from '../Form';
import './userprofile.sass';


export class UserProfile extends React.Component {

  saveChanges = user => {
    console.log(user);
  };
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <div className="user-profile__main">
          <Form
            excluded={['password', 'password_confirm']}
            onSubmit={this.saveChanges}
            buttonName="save"
            checkbox
            desctiption
            avatar
            data={user}
          />
        </div>
        {/* <div className="user-profile_img"><div className="img-holder"><img src={this.props.photo} /></div><input type="file"/></div> */}
      </React.Fragment>
    );
  }
}
