import { Redirect } from "react-router-dom";
import { Button } from "../../design-system/Button";
import React, { useEffect, useState } from "react";
import { InputField } from "../../design-system/InputField";
import { Status, useLoginPost } from "./authClient";
import { useAlert } from "react-alert";
import {
  JustifyCenterContainer,
  SingleColumnContainer,
} from "../../design-system/Container";

import { useAuthentication } from "../../auth-provider/AuthProvider";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { token, status, setLogin } = useLoginPost();
  const alert = useAlert();
  const isEmailAndPassValid = email && password;
  const { setToken } = useAuthentication();

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  useEffect(() => {
    status === Status.Error && alert.error("Request Failed");
    status === Status.AuthError && alert.error("Incorrect Email or Password");
  }, [alert, status]);

  useEffect(() => {
    token && setToken(token);
  }, [token, setToken]);

  const handleSubmit = () => {
    isEmailAndPassValid || alert.error("Incorrect email or password.");
    isEmailAndPassValid && setLogin({ email: email, password: password });
  };

  return (
    <>
      <SingleColumnContainer width="90%;" marginTop="10%;">
        {status === Status.Success && <Redirect to={{ pathname: "/home" }} />}
        <JustifyCenterContainer width="100%;">
          <InputField
            placeholder="Email"
            type="email"
            onChange={(event) => {
              handleEmailChange(event.target.value);
            }}
          ></InputField>
        </JustifyCenterContainer>
        <JustifyCenterContainer width="100%;">
          <InputField
            placeholder="Password"
            type="password"
            onChange={(event) => {
              handlePasswordChange(event.target.value);
            }}
          ></InputField>
        </JustifyCenterContainer>
        <JustifyCenterContainer width="100%;">
          <Button onClick={handleSubmit} aria-label="login-button">
            Login
          </Button>
        </JustifyCenterContainer>
      </SingleColumnContainer>
    </>
  );
};
