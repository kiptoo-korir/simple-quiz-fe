<script>
  import Question from "./Question.svelte";
  import Pagination from "./Pagination.svelte";

  export let questions;

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

  const questionLength = questions.length;
  let selectedChoices = Array(questionLength);

  $: selected = selectedChoices[currentQnIndex];

  const changeQuestion = (e) => {
    currentQnIndex = e.detail;
  };

  const selectChoice = (e) => {
    const { questionNo, choice } = e.detail;
    selectedChoices[questionNo] = choice;
  };
</script>

<div class="trivia-container">
  <div class="card">
    <Question
      question={currentQuestion.question}
      qNo={currentQnIndex}
      choices={currentChoices}
      {selected}
      on:select-choice={selectChoice}
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
