import React from "react";
import styled,  { css }  from "styled-components";
import Container from "../elements/Container";
import { useStoreActions } from "easy-peasy";
import picture from "./pic/logo.png";
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
        }
      }
    );
  }

  const Button = styled.button`
    background: transparent;
    border-radius: 4px;
    border: 9px solid red;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 0.5em;

    ${(props) =>
      props.primary &&
      css`
        background: red;
        color: white;
      `};
  `;

  const Logo = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 5px;
    background-image: url(${picture});
    -webkit-background-size: cover;
    background-size: cover;
  `;

  const NavCenter = styled.div`
    text-align: center;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

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
