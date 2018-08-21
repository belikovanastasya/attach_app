import ReactDom from 'react-dom';
import { navList } from '../../constants';
import { Langs } from '../Langs';
import './navigation.sass';


export const Navigation = (props) => {
  return (
    <div className={`menu ${props.hidden ? 'active' : null}`}>
    <div className="container">
      <ul className="menu_nav">
        {navList.map((link, index) => <li key={index}><a href={link}>{link}</a></li>)}
      </ul>
      <Langs />
    </div>
  </div>
  )
}