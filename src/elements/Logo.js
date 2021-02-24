import styled from "styled-components";
import picture from "../components/pic/logo.png";

export default styled.div`
  width: 75px;
  height: 75px;
  border-radius: 5px;
  background-image: url(${picture});
  -webkit-background-size: cover;
  background-size: cover;
`;
