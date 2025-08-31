import styled from "styled-components";
import { GlobalStyles } from "./index.js";
import { Device } from "./styles/breakpoints.jsx";

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <section className="contentSidebar">Sidebar</section>
        <section className="contentMenuHamburger">Menu Hambuger</section>
        <section className="contentRouters">Routes</section>
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
    background-color: rgba(78, 45, 78, 0.5);
  }

  .contentMenuHamburger {
    position: absolute;
    background-color: rgba(72, 156, 64, 0.5);
  }

  .contentRouters {
    background-color: rgba(189, 27, 189, 0.5);
    grid-column: 1;
    width: 100%;
  }

  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSidebar {
      display: initial;
    }

    .contentMenuHamburger {
      display: none;
    }

    .contentRouters {
      grid-column: 2;
    }
  }
`;
export default App;
