import React from 'react';
import { NavLink } from 'react-router-dom';
import './login.sass';


export const Login = () => (
  <React.Fragment>
    <NavLink to="./user" className="userprofile"><img src="./images/user.svg" alt="" /></NavLink>
  </React.Fragment>
);
