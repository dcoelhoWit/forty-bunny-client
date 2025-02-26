import styled from "styled-components";
import React from "react";

// Style
const Container = styled.div`
  text-align: center;
`;

// Props
interface ITeamPickerProps {
    team: string;
  }
// Component
const TeamPicker = ({ team }: ITeamPickerProps) => {
  const getGreeting = () => {
    switch(team) {
        case "Red":
            return "BEM-VINDOS LEÕES DA PRADARIA!";
        case "Blue":
            return "BEM-VINDOS PÁSSAROS MALUCOS!";
        case "Yellow":
            return "BEM-VINDOS RATOS-ESQUILOS!";
        case "Green":
            return "BEM-VINDOS RATOS-ESQUILOS!";
    }
  }

  return (
    <Container>
    <h2>{getGreeting()}</h2>
    <h2>POR FAVOR AGUARDEM QUE O JOGO COMECE</h2>
    </Container>
  );
}

export default TeamPicker;