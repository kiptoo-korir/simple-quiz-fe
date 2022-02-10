<script>
  import { Router, Route, Link } from "svelte-routing";
  import Quiz from "./pages/Quiz.svelte";
  import Home from "./pages/Home.svelte";

  export let url = "";
</script>

<Router {url}>
  <main>
    <div class="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quiz">quiz</Link>
      </nav>
      <div>
        <Route path="/"><Home /></Route>
        <Route path="/quiz"><Quiz /></Route>
      </div>
    </div>
    >
  </main>
</Router>

<style>
</style>
