import './socialList.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialList } from "../../constants";

export const SocialList = () => {
    const socialList = socialList.map((index, item) =><li key={index}><a href={item.link}></a></li> )
    return (
        <ul>
            {socialList}
        </ul>
    );
}
