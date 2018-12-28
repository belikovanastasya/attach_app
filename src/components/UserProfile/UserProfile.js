import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from '../../components/Checkbox'
import './userprofile.sass';


export class UserProfile extends React.Component {
  render() {
    return (
      <form className="user-profile-form">
        <div className="user-profile__main">
        <div><Checkbox /> <span>I am a desinger</span></div><button className="edit-btn"><FontAwesomeIcon icon="edit" /></button>
          <input disabled type="text" name="email" value={this.props.email}/>
          <button className="edit-btn"><FontAwesomeIcon icon="times" /></button>
          <input
            disabled
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <button className="edit-btn"><FontAwesomeIcon icon="edit" /></button>
          <input
            disabled
            type="text"
            name="secondname"
            placeholder="Second Name"
          />
          <button className="edit-btn"><FontAwesomeIcon icon="edit" /></button>
          <textarea placeholder="About me" />
          <button className="edit-btn"><FontAwesomeIcon icon="edit" /></button>
        </div>
        <div className="user-profile_img"><div className="img-holder"><img src={this.props.photo} /></div><input type="file"/></div>
        <div className="btn_holder"><button className="btn">Save</button></div>
      </form>
    );
  }
}
