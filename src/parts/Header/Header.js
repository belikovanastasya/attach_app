import ReactDom from 'react-dom';
import { Navigation } from '../Navigation';
import { Langs } from '../Langs';
import { Login } from '../Login';
import {Burger} from '../../components/Burger'
import './header.sass'



export const Header = () => (
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
          <Login />
        </div>
      </div>
    </div>
  </header>
)