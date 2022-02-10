<script>
  const onSubmit = (e) => {};

  let category = "9";
  let difficulty = "easy";
</script>

<div class="trivia-container">
  <div class="card">
    <h5 class="text-center">Start Your Quiz</h5>
    <form on:submit|preventDefault={onSubmit} action="">
      <div class="form-control">
        <label for="category" class="form-label">Select Category</label>
        <select
          name="category"
          id="category"
          class="form-input"
          bind:value={category}
        >
          <option value="9" selected>General Knowledge</option>
          <option value="11" selected>Entertainment: Film</option>
          <option value="12" selected>Entertainment: Music</option>
          <option value="21" selected>Sports</option>
          <option value="23" selected>History</option>
        </select>
      </div>
      <div class="form-control">
        <label for="difficulty" class="form-label"
          >Select Difficulty Level</label
        >
        <select
          name="difficulty"
          id="difficulty"
          class="form-input"
          bind:value={difficulty}
        >
          <option value="easy" selected>Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <button class="btn-submit" type="submit"> Start Quiz </button>
      </div>
    </form>
  </div>
</div>

<style>
  .form-input {
    background-color: white;
    border: 1px solid black;
    padding: 0.8rem 0.8rem;
    border-radius: 8px;
    font-size: 98%;
    width: 100%;
  }

  .form-label {
    display: block;
    padding: 1rem 0;
  }

  .btn-submit {
    margin: 1.5rem auto;
    display: block;
    border-radius: 10px;
    background-color: #052e33;
    color: white;
    font-size: 100%;
    padding: 1rem;
    transition: background-color 0.4s;
  }

  .btn-submit:hover {
    background-color: white;
    border: 1px solid #052e33;
    color: #052e33;
    box-shadow: 0 5px 5px rgb(5, 46, 51, 0.1);
  }
</style>
