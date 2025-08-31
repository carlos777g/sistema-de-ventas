import styled from "styled-components";
import { GlobalStyles } from "./index.js";
import 

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <section className="contentSidebar"></section>
        <section className="contentMenuHamburger"></section>
        <section className="contentRouters"></section>
      </Container>
    </>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  .contentSidebar {
    display: none;
  }

  .contentMenuHamburger {

  }

  .contentRouters {

  }
`;
export default App;
