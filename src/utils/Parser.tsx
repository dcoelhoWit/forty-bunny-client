export interface ActiveQuestion {
  index: string;
}

export function parseActiveQuestion(input: any): ActiveQuestion {
  const activeQuestion: ActiveQuestion = {
    index: input["index"],
  };
  return activeQuestion;
}

export interface Question {
  index: string;
  title: string;
  options: Option[];
}

export interface Option {
  letter: string;
  value: string;
}

export function parseQuestions(input: any): Question[] {
  const questionsList = Object.keys(input).map((value) => {
    const index: string = value;
    const details: QuestionDetailsParser = parseQuestionDetails(input[index]);
    const question: Question = {
      index: index,
      title: details.title,
      options: details.options,
    };
    return question;
  });
  return questionsList;
}

// PRIVATE

interface QuestionDetailsParser {
  title: string;
  options: Option[];
}

function parseQuestionDetails(input: any): QuestionDetailsParser {
  const detailsList = Object.keys(input).map((key) => {
    const details: QuestionDetailsParser = {
      title: key,
      options: parseOptions(input[key]),
    };
    return details;
  });
  return detailsList[0];
}

function parseOptions(input: any): Option[] {
  const options = Object.keys(input).map((key) => {
    const option: Option = {
      letter: key,
      value: input[key],
    };
    return option;
  });
  return options;
}