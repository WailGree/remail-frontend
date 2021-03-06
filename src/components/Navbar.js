import React from "react";
import styled, { css } from "styled-components";
import { useStoreActions, useStoreState } from "easy-peasy";
import picture from "./pic/logo.png";
import { logOut } from "../controller/Controller";
import Link from "../elements/Link";

function Navbar() {
  const changeLoginState = useStoreActions((actions) => actions.toggle);
  const setMessages = useStoreActions((actions) => actions.setMessages);
  const User = useStoreState((actions) => actions.userName);

  function handleSignOut() {
    logOut();
    changeLoginState();
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
    border-radius: 40px;
    background-image: url(${picture});
    -webkit-background-size: cover;
    background-size: cover;
  `;

  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Greet = styled.div`
    font-family: serif;
    font-size: 15pt;
    font-family: fantasy;
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
  const logOutButton = (
    <Button primary onClick={handleSignOut}>
      Sign out
    </Button>
  );
  let content = (
    <Nav>
      <Logo></Logo>
      <Greet>Welcome: somebody! </Greet>
      <div>
        <Link to={`/new-email`}>+</Link>
        {logOutButton}
      </div>
    </Nav>
  );
  if (User) {
    content = (
      <Nav>
        <Logo></Logo>
        <Greet>Welcome: {User}!</Greet>
        <div>
          <Link to={`/new-email`}>+</Link>
          {logOutButton}
        </div>
      </Nav>
    );
  }

  return content;
}

export default Navbar;
