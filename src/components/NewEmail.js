import React from "react";
import styled from "styled-components";
import { sendEmail } from "../controller/Controller";
import Button from "../elements/Button";
import Logo from "../elements/Logo";
import { useHistory } from "react-router-dom";

function NewEmail() {
  const NavCenter = styled.div`
    text-align: center;
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  const Container = styled.div`
    width: 500px;
    height: 600px;
    color: #000;
    background: rgba(255, 255, 255, 0.4);
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

  const inputStyle = {
    fontSize: "14px",
    height: "25px",
    width: "390px",
    background: "rgba(255, 255, 255, 0.6)",
    align: "left",
  };

  const textAreaStyle = {
    fontSize: "13px",
    height: "75px",
    width: "390px",
    background: "rgba(255, 255, 255, 0.6)",
    alignItems: "left",
  };

  const history = useHistory();

  const SubmitHandler = (event) => {
    event.preventDefault();
    let t = event.target;
    sendEmail(t.message.value, t.subject.value, t.to.value);
    history.goBack();
  };

  return (
    <Container>
      <NavCenter>
        <Logo />
        <form onSubmit={SubmitHandler}>
          <p>To:</p>
          <input style={inputStyle} required type="text" name="to" />
          <p>Subject:</p>
          <input style={inputStyle} required type="text" name="subject" />
          <p>Message:</p>
          <textarea style={textAreaStyle} required type="text" name="message" />
          <Button type="submit" primary>
            Send
          </Button>
        </form>
      </NavCenter>
    </Container>
  );
}

export default NewEmail;
