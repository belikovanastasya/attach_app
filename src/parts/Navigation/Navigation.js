import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';
import { navList } from '../../constants';
import { Langs } from '../Langs';
import './navigation.sass';


export class Navigation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hidden: this.props.hidden
    }
  }
  render() {
    return(
    <div className={`menu ${this.props.hidden ? 'active' : null}`}>
      <div className="container">
        <ul className="menu_nav">
            {navList.map((nav, index) => <li key={index} onClick={this.props.updateData}><NavLink to={`/${nav.link}`} activeClassName="active">{nav.text}</NavLink></li>)}
        </ul>
        <Langs />
      </div>
      </div>
    )
  }
}