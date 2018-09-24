import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Langs } from '../Langs';
import { Login } from '../Login';
import { Burger } from '../../components/Burger';
import {logout} from '../../servises';
import './header.sass';
import { removeUser } from '../../store';

export class HeaderComponent extends React.Component {

  logout = (user) => {
    this.props.dispatch(removeUser(user));
    logout();
  }
  render() {
    const isLogin  = this.props.user;
    const guestLinks = (
      <React.Fragment>
        <NavLink to="./user" className="userprofile"><img src="./images/user.svg"></img></NavLink>
      <button className="logout" onClick={() => this.logout(null)}><img src="./images/logout.svg"></img></button>
    </React.Fragment>
    );
    return (
      <header>
      <div className="container">
        <div className="header_wrap">
          <Burger />
      <div className="header_logo_wrap">
            <a href="/home" className="header_logo">
              <img src="images/logo.png" alt=""></img>
            </a>
            <span>co-creation platform</span>
          </div>
          <div className="header_info">
            <span className="circle circle_lang"></span>
            <Langs />
              {!isLogin ? <Login /> : guestLinks
                }
          </div>
        </div>
      </div>
    </header>
    )
  }
}

const mapStoreToProps = state =>({
  user: state.user
  })

export const Header =  connect(mapStoreToProps)(HeaderComponent);


