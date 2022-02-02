<script>
  import Trivia from "./components/Trivia.svelte";
  import Loading from "./components/Loading.svelte";
  import { fetchQuestions } from "./services/questionService";
  import { onMount } from "svelte";

  let questions;

  onMount(async () => {
    const results = await fetchQuestions();
    questions = results;
  });
</script>

<main>
  <div class="app">
    {#if questions}
      <Trivia {questions} />
    {:else}
      <Loading />
    {/if}
  </div>
</main>

<style>
</style>
