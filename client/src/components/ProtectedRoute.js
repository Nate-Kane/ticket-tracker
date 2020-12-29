import React, { Component, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

//How we will use this.
// Think of this Protected Route that has the ability to render out desired component if we have a valid user or redirect to a login page if we do not

//  Remember we wrap all of our components in a FetchUser which see if we have an Authenteciated user and will set the user in our AuthProvider

// we go from this...
// <Route exact path="/thingsDemo" component={ThingsDemo} />

// to this...
// <FetchUser>
//    <ProtectedRoute exact path="/thingsDemo" component={ThingsDemo} />
// </FetchUser>

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        // if authenticated render to component prop(ThingsDemo in ex above)
        authenticated ? (
          <Component {...props} />
        ) : (
          // if not authenticated redirect to login screen)
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;

                      //////////       THESE NOTES MIGHT BE HELPFUL FOR THE FUTURE           //////////////

  // A note on ...rest

// first we don't have to call it rest, it called that by convention to mean the rest of the arguments, so stick with calling it rest but realize that is not a reserved key word

// function demo(...rest) {
//   console.log(rest);
//   console.log(...rest);
//   console.log({ ...rest });
// }

// demo(1, 2, 3, 4);
// // 1 2 3 4
// // { '0': 1, '1': 2, '2': 3, '3': 4 }

// function demo1({ component: Component, ...rest }) {
//   console.log(...rest);
//   console.log({ ...rest });
// }

// demo({ component: 1, exact: true, test: "hello" });
// { component: 1, exact: true, test: 'hello' }
// { '0': { component: 1, exact: true, test: 'hello' } }