import './footer.sass';
import { Navigation } from '../Navigation';


export const Footer = () => (
  <div className="footer-wrap">
    <a href="./home">Logo</a>
    <Navigation />
    <div className="footer-bot">
      <span>Copyright © 2018 Attach Inc. All rights reserved.</span>
    </div>
  </div>
);
