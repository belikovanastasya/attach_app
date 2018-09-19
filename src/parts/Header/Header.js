import ReactDom from 'react-dom';
import { Navigation } from '../Navigation';
import { Langs } from '../Langs';
import { Login } from '../Login';
import { Burger } from '../../components/Burger';
import { NavLink } from 'react-router-dom';
import './header.sass'



export class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  logout = (user) => {
    this.props.setLoginState(user);
    this.props.history.push('/')

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
