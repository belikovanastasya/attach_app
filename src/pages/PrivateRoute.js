import { Route, Switch, Redirect } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, login, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      login ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);
