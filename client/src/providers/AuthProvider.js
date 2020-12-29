import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [authErrors, setAuthErrors] = useState([]);
  const [authLoading, setAuthLoading] = useState(false);

  // used to simulating a api/blocking cal;
  function timeoutPromise(interval) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("done");
      }, interval);
    });
  }

  const resetProvider = () => {
    setAuthLoading(true);
    setAuthErrors([]);
  };

  const handleRegister = async (user, history) => {
    try {
      resetProvider();
      let res = await axios.post("/api/auth", user);
      setUser(res.data.data);

      history.push("/");
    } catch (err) {
      debugger;
      // handle errors here bad UX to not let the user know something went wrong
      // notice how data is coming back differently in handle login
      setAuthErrors(err.response.data.errors.full_messages);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogin = async (user, history) => {
    try {
      resetProvider();
      let res = await axios.post("/api/auth/sign_in", user);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      // handle errors here bad UX to not let the user know something went wrong
      setAuthErrors(err.response.data.errors);
    } finally {
      // finally runs wether catch or try happens, either way we want to stop loading
      setAuthLoading(false);
    }
  };

  const handleLogout = async (history) => {
    try {
      setAuthErrors([]);
      let res = await axios.delete("/api/auth/sign_out");
      setUser(null);
      history.push("/login");
    } catch (err) {
      setAuthErrors(err.response.data);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authErrors,
        authLoading,
        setAuthErrors,
        authenticated: user !== null,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        setUser: (user) => setUser(user),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;