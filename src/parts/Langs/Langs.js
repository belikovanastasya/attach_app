import { langsList } from '../../constants';
import './langs.sass';

export const Langs = () => (
  <ul className="langs">
    {langsList.map((item, index) => <li key={index} className={item.className}><a href="#">{item.lang}</a></li>)}
  </ul>
);
