import React from 'react';
import './socialList.sass';
import { socialListArr } from '../../constants';

export const SocialList = () => {
  const socialListItems = socialListArr.map((item, index) => <li key={index}><a href={item.link}><img src={`images/${item.icon}.png`} alt="" width="30px" height="30px" /></a></li>)
  return (
    <React.Fragment>
      <p>Follow Us</p>
      <ul className="social">
        {socialListItems}
      </ul>
    </React.Fragment>
  );
};
