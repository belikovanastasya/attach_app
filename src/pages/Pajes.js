
import ReactDom from "react-dom";
//import { Component}
import { Route, Switch } from 'react-router-dom';
import { Main } from './Main';
import { User } from './User';
import { About } from './About';
import { Project } from './Project';
import { Contacts } from './Contacts';
import { Newses } from './Newses';
import { Login} from './Login'


export class Pages extends Component {
  render() {
    return (
      <Switch>
  <Route path="/" exact  component={Main} key="home" />,
  <Route path="/user" component={User} key="user" />,
  <Route path="/about" component={About} key="about" />,
  <Route path="/project" component={Project} key="project" />,
  <Route path="/newses" component={Newses} key="news" />,
  <Route path="/contacts" component={Project} key="contacts" />,
  <Route render={({ location }) => <h1>Requested page {location.pathname} not found</h1>} />
  </Switch>
    )
  }
  
};
