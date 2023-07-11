// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const auth = localStorage.getItem("accessToken");

// const PrivateRoute = ({ exact, component: Component, ...rest }) => (
//   <Route
//     exact={exact ? true : false}
//     rest
//     render={(props) =>
//       auth ? (
//         <Component {...props} {...rest}></Component>
//       ) : (
//         <Redirect to={`${process.env.PUBLIC_URL}/auth-login`}></Redirect>
//       )
//     }
//   ></Route>
// );

// export default PrivateRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={`${process.env.PUBLIC_URL}/auth-login`} />
      }
    />
  );
};

export default PrivateRoute;
