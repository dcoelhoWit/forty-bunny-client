import "./App.scss";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseAppConf from "./firebase";
import QuestionPage from "./components/QuestionPage";
import {
  Question,
  ActiveQuestion,
  parseActiveQuestion,
  parseQuestions,
} from "./utils/Parser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamSeletionPage from "./components/TeamSelectionPage";
import InactivePage from "./components/InactivePage";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<string>("");

  // Styles
  const AppContainer = styled.div`
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    color: #fff;
  `;
  const Container = styled.div.attrs({ className: "container" })`
    max-width: 1200px;
    margin: 0 auto;
  `;

  // Fetch Questions List
  useEffect(() => {
    const database = getDatabase(firebaseAppConf);
    const collectionRef = ref(database, "Questions");

    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if (dataItem) {
          const parsedQuestions = parseQuestions(dataItem);
          setQuestions(parsedQuestions);
        }
      });
    };

    fetchData();
  }, []);

  // Fetch Active Question
  useEffect(() => {
    const database = getDatabase(firebaseAppConf);
    const collectionRef = ref(database, "ActiveQuestion");

    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if (dataItem) {
          const currentQuestionIndex: ActiveQuestion =
            parseActiveQuestion(dataItem);
          setActiveQuestionIndex(currentQuestionIndex.index);
        }
      });
    };

    fetchData();
  }, []);

  function getQuestion(index: string): Question {
    const question = questions.find((element) => {
      return element.index === index;  
    })
    if(question === undefined) {
      const q: Question = {
        index: "",
        title: "",
        options: [],
      }
      return q;
    }
    return question;
  }

  function anyTeamSelected(): Boolean {
    const team = document.documentElement.style.getPropertyValue("--team");
    return team !== "";
  }

  return (
    <AppContainer>
      <Container>
        <Router>
          <Routes>
            <Route
              path="/"
              element={activeQuestionIndex !== "" ? <QuestionPage question={getQuestion(activeQuestionIndex)}></QuestionPage> : (anyTeamSelected()? <InactivePage></InactivePage> : <TeamSeletionPage></TeamSeletionPage>)}
            ></Route>
          </Routes>
        </Router>
      </Container>
    </AppContainer>
  );
}

export default App;
