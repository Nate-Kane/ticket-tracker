import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, authLoading, authErrors, setAuthErrors } = useContext(
    AuthContext
  );

  // might need a useEffect to clear errors on load becuase if a error is genertated in register than navigate to here authError would have erorr
  useEffect(() => {
    setAuthErrors([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // need to pass a refernce to history because we redirect it in the AuthProvider
    handleLogin({ email, password }, props.history);
  };
  if (authLoading) {
    return <p>Loading</p>;
  }
  // Basic SemanticReact Form
  return (
    <Segment basic>
      <Header as="h1" textAlign="center">
        Login
      </Header>
      {authErrors.length > 0 && <p>{authErrors[0]}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          autoFocus
          required
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Input
          label="Password"
          required
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Segment textAlign="center" basic>
          <Button loading={authLoading} primary type="submit">
            Submit
          </Button>
        </Segment>
      </Form>
    </Segment>
  );
};

export default Login;