
import ReactDom from "react-dom";
import { Route, Switch } from 'react-router-dom';
import { User } from './User';
import { Main } from './Main'

export const Pages = () => (
  <Switch>
  <Route path="/" component={Main} key="home" />,
  <Route path="/user" component={User} key="user" />,
  <Route render={({ location }) => <h1>Requested page {location.pathname} not found</h1>} />
  </Switch>
);
 