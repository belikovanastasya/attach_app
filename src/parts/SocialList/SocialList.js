import './socialList.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialListArr } from "../../constants";

export const SocialList = () => {
    const socialListItems = socialListArr.map((item, index) => <li key={index}><a href={item.link}></a></li> )
    return (
        <ul>
            {socialListItems}
        </ul>
    );
}
