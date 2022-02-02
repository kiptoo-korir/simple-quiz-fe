export const fetchQuestions = async (category, difficulty) => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple"
  );
  if (response.ok) {
    const { results } = await response.json();
    return results;
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
