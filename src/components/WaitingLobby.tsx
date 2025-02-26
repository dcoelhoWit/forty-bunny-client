import styled from "styled-components";
import React, { useEffect } from "react";

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