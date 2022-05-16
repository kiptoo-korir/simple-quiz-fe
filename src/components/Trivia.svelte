<script>
  import Question from "./Question.svelte";
  import Pagination from "./Pagination.svelte";

  export let realQuestions;

  let questions = realQuestions;

  let currentQnIndex = 0;
  $: currentQuestion = questions[currentQnIndex];
  $: currentChoices = currentQuestion.choices;

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

  const submitAnswers = () => {};
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
    <div class="card-footer">
      <button type="button" class="btn-submit">Restart</button>
      <button type="button" class="btn-submit" on:click={submitAnswers}
        >Submit</button
      >
    </div>
  </div>
</div>

<style>
  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
