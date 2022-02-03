<script>
  import Trivia from "./components/Trivia.svelte";
  import Loading from "./components/Loading.svelte";
  import { fetchQuestions } from "./services/questionService";
  import { onMount } from "svelte";

  let realQuestions;

  onMount(async () => {
    const results = await fetchQuestions();
    realQuestions = results;
  });
</script>

<main>
  <div class="app">
    {#if realQuestions}
      <Trivia {realQuestions} />
    {:else}
      <Loading />
    {/if}
  </div>
</main>

<style>
</style>
