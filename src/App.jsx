import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, MyRoutes, Sidebar, useThemeStore } from "./index.js";
import { Device } from "./styles/breakpoints.jsx";
import { useState } from "react";

function App() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <Container>
        <GlobalStyles />
        <section className="contentSidebar">
          <Sidebar
            state={sidebarOpen}
            setState={() => setsidebarOpen(!sidebarOpen)}
          />
        </section>
        <section className="contentMenuHamburger">Menu Hambuger</section>
        <section className="contentRouters">
          <MyRoutes />
        </section>
      </Container>
    </ThemeProvider>
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
