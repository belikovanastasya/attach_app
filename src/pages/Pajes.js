import { Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Main } from './Main';
import { User } from './User';
import { About } from './About';
import { Project } from './Project';
import { News } from './News';
import { Authorization } from './Authorization';
import { Registration } from './Registration/Registration';


export class Pages extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute login={this.props.login} path="/user" component={User} />,
        <Route path="/" exact component={Main} key="home" />,
    {!this.props.login ? <Route path="/login" render={({ location }) => <Authorization location={location}onLogin={this.props.login} />} /> :
        <Redirect  to={{  pathname: '/' }}/>},
        <Route path="/registration" render={() => <Registration onLogin={this.setLoginState} />} />,
        <Route path="/about" component={About} key="about" />,
        <Route path="/project" component={Project} key="project" />,
        <Route path="/newses" component={News} key="news" />,
        <Route path="/contacts" component={Project} key="contacts" />,
        <Route render={({ location }) => <h1>Requested page {location.pathname} not found</h1>} />
      </Switch>
    );
  }
}
