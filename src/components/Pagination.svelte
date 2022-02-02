<script>
  import PaginationButton from "./PaginationButton.svelte";

  export let questionLength;
  export let currentQnIndex;
</script>

<div class="flex-row pt-2">
  {#each Array(questionLength) as _, index}
    <PaginationButton {index} {currentQnIndex} on:change-question />
  {/each}
</div>
