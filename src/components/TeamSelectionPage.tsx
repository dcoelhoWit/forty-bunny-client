import styled from "styled-components";
import React, { useEffect } from "react";
import { getTeamColor } from "../utils/TeamColors";

// Style
const Container = styled.div`
  text-align: center;
`;

const Button = styled.button<{ themeColor: string }>`
  background-color: ${(props) => props.themeColor || "gray"};
  color: white;
  width: 40rem;
  text-align: center;
  border-radius: 3rem;
  padding: 1.1rem 1.5rem 1.1rem 1.5rem;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 15px;
`;

// Component
export default function TeamSeletionPage() {

  // Set Default Color (No Team)
  useEffect(() => {
    document.documentElement.style.setProperty("--teamColor", "linear-gradient(to right bottom, #a0a0a0, #464646)");
    document.documentElement.style.setProperty("--team", "");
  });

  function buttonPressed(team: string) {
    document.documentElement.style.setProperty("--teamColor", getTeamColor(team));
    document.documentElement.style.setProperty("--team", team);
  }

  return (
    <Container>
      <h2>{"ESCOLHE A TUA EQUIPA"}</h2>
      <Button onClick={() => buttonPressed("red")} themeColor={"#f64646"}>RED</Button>
      <Button onClick={() => buttonPressed("blue")} themeColor={"#76bcea"}>BLUE</Button>
      <Button onClick={() => buttonPressed("yellow")} themeColor={"#cece57"}>YELLOW</Button>
      <Button onClick={() => buttonPressed("green")} themeColor={"#7fcd77"}>GREEN</Button>
    </Container>
  );
}
