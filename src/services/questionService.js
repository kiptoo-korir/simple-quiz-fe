export const fetchQuestions = async (category, difficulty) => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple"
  );
  if (response.ok) {
    const { results } = await response.json();

    const questions = results.map((result) => {
      let choices = shuffleArray([
        result.correct_answer,
        ...result.incorrect_answers,
      ]);
      return {
        difficulty: result.difficulty,
        question: result.question,
        correct_answer: result.correct_answer,
        choices,
      };
    });

    return questions;
  }
};

export const mockQuestion = () => {
  return [
    {
      question: "Which of the following was Brazil was a former colony under?",
      correct_answer: "Portugal",
      incorrect_answers: ["Spain", "The Netherlands", "France"],
    },
    {
      question: "In 1453, which important city fell?",
      correct_answer: "Constantinople",
      incorrect_answers: ["Rome", "Hamburg", "Athens"],
    },
  ];
};

export const shuffleArray = (array) => {
  let arrLength = array.length;
  for (let i = arrLength - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
