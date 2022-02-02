<script>
  import { mockQuestion } from "../services/questionService";
  import Question from "./Question.svelte";
  import Pagination from "./Pagination.svelte";

  let questions = mockQuestion();

  const shuffleArray = (array) => {
    let arrLength = array.length;
    for (let i = arrLength - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  let currentQnIndex = 0;
  $: currentQuestion = questions[currentQnIndex];
  $: currentChoices = shuffleArray([
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ]);
  let questionLength = questions.length;

  const changeQuestion = (e) => {
    currentQnIndex = e.detail;
  };
</script>

<div class="trivia-container">
  <div class="card">
    <Question
      question={currentQuestion.question}
      qNo={currentQnIndex}
      choices={currentChoices}
    />
    <Pagination
      {questionLength}
      {currentQnIndex}
      on:change-question={changeQuestion}
    />
  </div>
</div>

<style>
  .card {
    background-color: white;
    border-radius: 15px;
    padding: 40px 50px;
    margin: 20px 0px;
    position: relative;
    color: #333;
  }
</style>
