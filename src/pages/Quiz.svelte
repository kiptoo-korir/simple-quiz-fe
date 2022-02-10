<script>
  import { onMount } from "svelte";
  import Trivia from "../components/Trivia.svelte";
  import Loading from "../components/Loading.svelte";
  import { fetchQuestions } from "../services/questionService";

  let questions;

  onMount(async () => {
    const results = await fetchQuestions();
    questions = results;
  });
</script>

<div>
  {#if questions}
    <Trivia realQuestions={questions} />
  {:else}
    <Loading />
  {/if}
</div>
