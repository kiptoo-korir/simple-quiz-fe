<script>
  import { onDestroy, onMount } from "svelte";
  import Trivia from "../components/Trivia.svelte";
  import Loading from "../components/Loading.svelte";
  import { QuestionStore } from "../stores/questions";
  import { navigate } from "svelte-routing";

  let questions;

  const unsubscribe = QuestionStore.subscribe((qns) => {
    questions = qns;
  });

  onDestroy(unsubscribe);

  $: qnLength = questions.length;

  onMount(() => {
    if (qnLength === 0) {
      navigate("/");
    }
  });
</script>

<div>
  {#if qnLength > 0}
    <Trivia realQuestions={questions} />
  {:else}
    {navigate("/")}
  {/if}
</div>
