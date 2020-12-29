import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import ThingsDemo from "./things/ThingsDemo";
import { Container } from "semantic-ui-react";
// import BasicUpload from "./images/BasicUpload";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
// import Hooks from "./hooks";
import NoMatch from './components/NoMatch';

function App() {
  return (
    <>

      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;