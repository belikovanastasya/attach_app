
import ReactDom from "react-dom";
import { Redirect } from 'react-router-dom'
//import { Component}
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Main } from './Main';
import { User } from './User';
import { About } from './About';
import { Project } from './Project';
import { Contacts } from './Contacts';
import { Newses } from './Newses';
import { Authorization } from './Authorization';
import { Registration } from "./Registration/Registration";


export class Pages extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Switch>
          <PrivateRoute login={this.props.login} path="/user" component={User} />,
          <Route path="/login" render={({location}) => <Authorization onLogin={this.props.setLoginState} />} />},
        {/* {this.props.login ? <Redirect from="/login" to="/user" /> :
          <Route path="/login" render={() => <Authorization onLogin={this.props.setLoginState} />} />}, */}
          <Route path="/registration" render={() => <Registration onLogin={this.setLoginState} />} />},
          <Route path="/" exact component={Main} key="home" />,
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
