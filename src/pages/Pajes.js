
import ReactDom from "react-dom";
import { Redirect } from 'react-router-dom'
//import { Component}
import { Route, Switch } from 'react-router-dom';
import { Main } from './Main';
import { User } from './User';
import { About } from './About';
import { Project } from './Project';
import { Contacts } from './Contacts';
import { Newses } from './Newses';
import { Registration } from './Registration'


export class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  onLogin = (name) => {
    this.setState({ name });
    this.props.setLoginState(true)
  }
 
  render() {
    return (
      <Switch>
        {this.props.islogin ? <Redirect from="/login" to="/user" /> :
          <Route path="/login" render={() => <Registration onLogin={this.onLogin} />} />},
          <Route path="/" exact component={Main} key="home" />,
          {this.props.isLogin && <Route path="/user" component={User} key="user" />},
          <Route path="/about" component={About} key="about" />,
          <Route path="/project" component={Project} key="project" />,
          <Route path="/newses" component={Newses} key="news" />,
          <Route path="/contacts" component={Project} key="contacts" />,
          <Route render={({ location }) => <h1>Requested page {location.pathname} not found</h1>} />
        </Switch>
    )
  }
};
