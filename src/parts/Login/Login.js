import { NavLink } from 'react-router-dom';
import { login } from '../../servises'
import './login.sass'


export const Login = () => (
  <React.Fragment>
    <NavLink to="./login" className="userprofile"><img src="./images/user.svg"></img></NavLink>
  </React.Fragment>
);