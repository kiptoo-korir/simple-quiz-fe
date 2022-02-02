<script>
  export let questionNo;
  export let choice;
  export let index;

  const radioId = `q-${questionNo}-choice-${index}`;
</script>

<div class="text-center choice-box">
  <div class="inline-block">
    <input
      type="radio"
      id={radioId}
      name={`qn-${questionNo}-choice`}
      value={choice}
      class="choices"
    />
    <label class="choice-label" for={radioId}>{choice}</label>
  </div>
</div>

<style>
  .choices {
    appearance: none;
    -webkit-appearance: none;
  }

  .choices:checked + .choice-label {
    background-color: #202142;
    color: white;
  }

  .choice-label {
    padding: 8px 16px;
    border: 1px solid black;
    border-radius: 15px;
  }

  .choice-label:hover {
    background-color: black;
    color: white;
  }

  .choice-box {
    margin-top: 17px;
  }

  .inline-block {
    display: inline-block;
  }
</style>
