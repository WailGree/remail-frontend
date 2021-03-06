import React from "react";
import { sendEmail } from "../controller/Controller";
import Button from "../elements/Button";
import Logo from "../elements/Logo";
import Container from "../elements/Container";
import NavCenter from "../elements/NavCenter";
import { useHistory } from "react-router-dom";

function NewEmail() {
  const containerStyle = {
    width: "500px",
    height: "600px",
  };

  const navCenterStyle = {
    width: "400px",
    heigth: "500px",
  };

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
    <Container style={containerStyle}>
      <NavCenter style={navCenterStyle}>
        <Logo />
        <form onSubmit={SubmitHandler}>
          <p>To:</p>
          <input style={inputStyle} required type="email" name="to" />
          <p>Subject:</p>
          <input style={inputStyle} type="text" name="subject" />
          <p>Message:</p>
          <textarea style={textAreaStyle} type="text" name="message" />
          <Button type="submit" primary>
            Send
          </Button>
        </form>
      </NavCenter>
    </Container>
  );
}

export default NewEmail;
