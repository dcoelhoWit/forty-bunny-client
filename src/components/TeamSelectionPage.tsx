import styled from "styled-components";
import React, { useState } from "react";
import { getTeamColor } from "../utils/TeamColors";
import WaitingLobby from "./WaitingLobby";

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

  const [selectedTeam, setSelectedTeam] = useState<string>("");

  function buttonPressed(team: string) {
    document.documentElement.style.setProperty(
      "--teamColor",
      getTeamColor(team)
    );
    document.documentElement.style.setProperty("--team", team);
    setSelectedTeam(team);
  }

  const renderContent = () => {
    if (selectedTeam === undefined || selectedTeam.length === 0) {
      // No team selected: show team selector
      return (
        <Container>
          <h2>{"ESCOLHE A TUA EQUIPA"}</h2>
          <Button onClick={() => buttonPressed("Red")} themeColor={"#f64646"}>
            LEÕES DA PRADARIA
          </Button>
          <Button onClick={() => buttonPressed("Blue")} themeColor={"#76bcea"}>
            PÁSSAROS MALUCOS
          </Button>
          <Button
            onClick={() => buttonPressed("Yellow")}
            themeColor={"#cece57"}
          >
            RATOS-ESQUILOS
          </Button>
          <Button onClick={() => buttonPressed("Green")} themeColor={"#7fcd77"}>
            COBRA ZAROLHA
          </Button>
        </Container>
      );
    } else {
      // Team already selected: show waiting screen
      return <WaitingLobby team= {selectedTeam}/>;
    }
  };

  return <>{renderContent()}</>;
}
