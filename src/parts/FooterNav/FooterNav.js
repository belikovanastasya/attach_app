import { NavLink } from "react-router-dom";
import { navList } from "../../constants";

export const FooterNav = props => {
 return (
    <ul className="menu_nav">
      {navList.map((nav, index) => (
        <li key={index} onClick={props.updateData}>
          <NavLink to={`/${nav.link}`} activeClassName="active">
            {nav.text}
          </NavLink>
        </li>
      ))}
    </ul>
 );
};
