<script>
  import { afterUpdate } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let questionNo;
  export let choice;
  export let index;
  export let selected;

  const radioId = `choice-${index}`;

  let dispatch = createEventDispatcher();

  const selectChoice = (questionNo, choice) => {
    dispatch("select-choice", {
      questionNo,
      choice,
    });
  };

  $: checked = selected === choice;
</script>

<div class="text-center choice-box">
  <div class="inline-block">
    <input
      type="radio"
      id={radioId}
      name="question-choice"
      value={choice}
      class="choices"
      {checked}
      on:change={selectChoice(questionNo, choice)}
    />
    <label class="choice-label" for={radioId}>{choice}</label>
  </div>
</div>

<style>
</style>
