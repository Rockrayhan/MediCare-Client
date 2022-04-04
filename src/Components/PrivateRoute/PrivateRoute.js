import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const PrivateRoute = ({children, ...rest  }) => {
    const {user, isLoading} = useAuth() ;    
    if (isLoading) {
        return <h5>Loading User</h5>
    }


    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login2",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;