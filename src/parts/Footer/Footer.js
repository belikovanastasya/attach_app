import './footer.sass';
import { FooterNav } from '../FooterNav';
import { SocialList } from '../SocialList';


export const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-wrap">
        <div className="footer-col col-1"><a href="./home"><img src="images/logo.png" alt="" /></a></div>
        <div className="footer-col">
          <p>wathcing</p>
          <FooterNav />
        </div>
        <div className="footer-col">
          <p>ask</p>
          <ul className="footer-nav-menu">
            <li><a href="mailto:attachboard.gmail.com">attachboard.gmail.com</a></li>
            <li><a href="/privatpolicy">Privat Policy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <SocialList />
        </div>
        <div className="footer-bot">
          <span>Copyright © 2018 Attach Inc. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
);
