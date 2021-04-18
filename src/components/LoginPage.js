import React from "react";
import Container from "../elements/Container";
import Button from "../elements/Button";
import Logo from "../elements/Logo";
import NavCenter from "../elements/NavCenter";
import { useStoreActions } from "easy-peasy";
import { login, getMails } from "../controller/Controller";

function AuthenticationButton() {
  const changeLoginState = useStoreActions((actions) => actions.toggle);
  const setMessages = useStoreActions((actions) => actions.setMessages);
  const setUser = useStoreActions((actions) => actions.setUser);

  function handleSignIn(event) {
    event.preventDefault();
    login(
      event.target.username.value,
      event.target.password.value,
      (response) => {
        if (response) {
          getMails((emails) => {
            setMessages(emails);
          });
          changeLoginState();
          setUser(event.target.username.value);
        }
      }
    );
  }

  return (
    <Container>
      <form onSubmit={handleSignIn}>
        <NavCenter>
          <Logo />
          <p>Enter your name:</p>
          <input required type="text" name="username" />
          <p>Enter your password:</p>
          <input required type="password" name="password" />
          <Button type="submit" primary>
            Sign in
          </Button>
        </NavCenter>
      </form>
    </Container>
  );
}

export default AuthenticationButton;
