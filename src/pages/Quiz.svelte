<script>
  import { onDestroy } from "svelte";
  import Trivia from "../components/Trivia.svelte";
  import Loading from "../components/Loading.svelte";
  import { QuestionStore } from "../stores/questions";
  import { navigate } from "svelte-routing";

  let questions;

  const unsubscribe = QuestionStore.subscribe((qns) => {
    questions = qns;
  });

  onDestroy(unsubscribe);

  if (questions === []) {
    navigate("/");
  }
</script>

<div>
  {#if questions}
    <Trivia realQuestions={questions} />
  {:else}
    <Loading />
  {/if}
</div>
