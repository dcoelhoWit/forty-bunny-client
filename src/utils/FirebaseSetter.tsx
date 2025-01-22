import { getDatabase, ref, update } from "firebase/database";

export function setAnswer(questionIndex: string, answer: string, team: string) {
  const db = getDatabase();
  
  update(ref(db, "Votes/" + questionIndex), {
    [team]: answer,
  });
}