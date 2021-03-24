import styled from "styled-components";
import picture from "../components/pic/loadingIcon.jpg";
import Container from "../elements/Container";


function LoadingPage(){
const LoadingIcon =  styled.div`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-image: url(${picture});
  -webkit-background-size: cover;
  background-size: cover;
`;

return(
  <Container>
    <LoadingIcon/>
  </Container>
);
}

export default LoadingPage;