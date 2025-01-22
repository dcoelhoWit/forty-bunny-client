import styled from "styled-components";
import React, { useState } from "react";
import { Question } from "../utils/Parser";

// Style
const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: ${(props) => (props.color ? props.color : "gray")};
  color: white;
  width: 40rem;
  text-align: center;
  border-radius: 3rem;
  padding: 1.1rem 1.5rem 1.1rem 1.5rem;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 15px;
`;

// Interfaces
interface QuestionPageProps {
  question: Question;
}

// Component
export default function QuestionPage({ question }: QuestionPageProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  function buttonPressed(option: string) {
    setSelectedOption(option);
  }

  function buttonColorFor(option: string) {
    if (option === selectedOption) {
      return "rgba(0, 0, 0, 0.7)";
    }
    return "rgba(67, 67, 67, 0.4)";
  }

  return (
    <Container>
      <h2>{"PERGUNTA " + question.index}</h2>
      <Button
        key={"ButtonOptionA"}
        onClick={() => buttonPressed("A")}
        color={buttonColorFor("A")}
      >
        A
      </Button>
      <Button
        key={"ButtonOptionB"}
        onClick={() => buttonPressed("B")}
        color={buttonColorFor("B")}
      >
        B
      </Button>
      <Button
        key={"ButtonOptionC"}
        onClick={() => buttonPressed("C")}
        color={buttonColorFor("C")}
      >
        C
      </Button>
      <Button
        key={"ButtonOptionD"}
        onClick={() => buttonPressed("D")}
        color={buttonColorFor("D")}
      >
        D
      </Button>
    </Container>
  );
}
