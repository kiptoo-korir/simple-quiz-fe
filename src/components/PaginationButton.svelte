<script>
  import { createEventDispatcher } from "svelte";

  export let index;
  export let currentQnIndex;

  let dispatch = createEventDispatcher();

  const changeQuestion = (qnIndex) => {
    dispatch("change-question", qnIndex);
  };
</script>

<button
  type="button"
  on:click={changeQuestion(index)}
  class={`btn-page ${currentQnIndex === index ? "active" : ""}`}
>
  {index + 1}
</button>

<style>
  .btn-page {
    padding: 1rem;
    background-color: #052e33;
    color: #fba61a;
    font-size: 105%;
    font-weight: 500;
    text-align: center;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
    transition: scale 0.4s;
    margin-top: 5px;
  }

  .active {
    background-color: #0b6874;
    color: #fdce81;
    scale: 95%;
  }
</style>
