<script>
  import Choice from "./Choice.svelte";

  export let question;
  export let qNo;
  export let choices;
</script>

<div>
  <h5 class="text-center">Question {qNo + 1}</h5>
  <p class="text-center">{question}</p>
  <div class="choices-container">
    {#each choices as choice, index (index)}
      <Choice {choice} questionNo={qNo} {index} />
    {/each}
  </div>
  <!-- {choices.map((choice, choiceNo) => (
    <Choice
      index={choiceNo}
      value={choice}
      answer={answer}
      questionNo={index}
      selectAnswer={selectAnswer}
      selectedChoice={isChecked}
      changeSelected={changeSelected}
      key={choiceNo}
    />
  ))} -->
</div>

<style>
  .choices-container {
    padding: 10px 30px;
  }
</style>
