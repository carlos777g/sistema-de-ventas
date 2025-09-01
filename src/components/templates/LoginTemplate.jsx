import styled from "styled-components";
import { Title, InputText2, Btnsave, Linea } from "../../index";

export function LoginTemplate() {
  return (
    <Container>
      <section className="contentCard">
        <div className="card">
          <Title>Ingresar</Title>
          <form action="post">
            <InputText2>
              <input className="form__field" placeholder="Email" type="text" />
            </InputText2>
            <InputText2>
              <input
                className="form__field"
                placeholder="Contraseña"
                type="password"
              />
            </InputText2>
            <Btnsave
              titulo={"Ingresar"}
              bgcolor={"#1cB0F6"}
              color={"255, 255, 255"}
              width={"100%"}
            />
          </form>
          <Linea>
            <span>O</span>
          </Linea>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
