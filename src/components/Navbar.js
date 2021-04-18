import React from "react";
import styled from "styled-components";
import { useStoreActions, useStoreState } from "easy-peasy";
import { logOut } from "../controller/Controller";
import Link from "../elements/Link";
import Button from "../elements/Button";
import Logo from "../elements/Logo";

function Navbar() {
  const changeLoginState = useStoreActions((actions) => actions.toggle);
  const User = useStoreState((actions) => actions.userName);

  function handleSignOut() {
    logOut();
    changeLoginState();
  }

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
