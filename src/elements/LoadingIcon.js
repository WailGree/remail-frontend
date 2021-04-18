import styled from "styled-components";
import picture from "../components/pic/loadingIcon.jpg";

export default styled.div`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-image: url(${picture});
  -webkit-background-size: cover;
  background-size: cover;
`;