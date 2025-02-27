import React from "react";
import styled from "styled-components";

// Style
const Container = styled.div`
  text-align: center;
`;

// Component
export default function InactivePage() {
  return (
    <Container>
      <h2>
        Resposta registada.
      </h2>
      <h2>
        Aguardem pela próxima pergunta.
      </h2>
    </Container>
  );
}
