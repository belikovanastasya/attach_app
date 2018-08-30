
import ReactDom from "react-dom";
import { Route } from 'react-router-dom';
import { User } from './User';

export const Pages = () => <Route path="/user" component={User} />;