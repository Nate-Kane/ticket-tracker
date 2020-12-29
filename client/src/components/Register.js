import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import { useFormInput } from "../customHooks/useFormInput";

const Register = ({ history }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { handleRegister, authLoading, authErrors, setAuthErrors } = useContext(
    AuthContext
  );
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfirmation = useFormInput("", "Password Confirmation");

  useEffect(() => {
    setAuthErrors([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // With our custom hook we need to grab to value from the form of hooks with .value
    if (password.value === passwordConfirmation.value)
      handleRegister(
        {
          email: email.value,
          password: password.value,
          passwordConfirmation: passwordConfirmation.value,
        },
        history
      );
    else alert("Passwords Do Not Match!");
  };

  // Useing custom useFormInput hook to reuse some common logic
  // in our Form inputs
  return (
    <Segment basic>
      <Header as="h1" textAlign="center">
        Register
      </Header>
      {/* simple way of showing errors, not great but better than nothing */}
      {authErrors && authErrors.map((err) => <p>{err}</p>)}
      <Form onSubmit={handleSubmit}>
        <Form.Input autoFocus {...email} />
        <Form.Input type="password" {...password} />
        <Form.Input type="password" {...passwordConfirmation} />
        <Segment textAlign="center" basic>
          <Button
            //ui ux enhancments to show loading and to prevent resubmit
            loading={authLoading}
            disabled={authLoading}
            primary
            type="submit"
          >
            Submit
          </Button>
        </Segment>
      </Form>
    </Segment>
  );
};

export default Register;