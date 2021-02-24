import React from "react";
import styled, { css } from "styled-components";
import { useStoreActions } from "easy-peasy";
import picture from "./pic/logo.png";

function AuthenticationButton() {
  const changeLoginState = useStoreActions((actions) => actions.toggle);
  const setMessages = useStoreActions((actions) => actions.setMessages);
  const setUser = useStoreActions((actions) => actions.setUser);
  function handleSignIn() {
    // gmailApi.handleSignIn().then(() => {
    //   gmailApi.getMessages(false, 1000).then((messages) => {
    //     gmailApi.getProfile().then((profile) => {
    //       setMessages(gmailApi.normalizeData(messages));
    //       setUser(profile.result.emailAddress);
    //       changeLoginState();
    //     });
    //   });
    // });
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
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  const Container = styled.div`
    width: 300px;
    height: 300px;
    color: #000;
    top: 50%;
    left: 50%;
    padding: 60px 30px;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    box-shadow: 8px 8px 50px #000;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const SubmitHandler = (event) => {
    event.preventDefault();
    alert("Your age must be a number" + name);
  };

  return (
    <Container>
      <NavCenter>
        <Logo />
        <form onSubmit={SubmitHandler}>
          <p>Enter your name:</p>
          <input
            type="text"
            name="username"
            // onChange={this.myChangeHandler}
          />
          <p>Enter your password:</p>
          <input
            type="password"
            name="password"
            //  onChange={this.myChangeHandler}
          />
          <Button type="submit" primary onClick={handleSignIn}>
            Sign in
          </Button>
        </form>
      </NavCenter>
    </Container>
  );
}

export default AuthenticationButton;
