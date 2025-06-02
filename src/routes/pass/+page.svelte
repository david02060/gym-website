<script>
  import { onMount } from 'svelte';

  let savedexercise = [];
  let inputLast = {
    exercise: '',
    sets: '',
    reps: '',
    weight: '',
  };

  //Läser in loggar från localStorage
  onMount(() => {
    const saved = localStorage.getItem('progressionLogs');
    if (saved) {
      savedexercise = JSON.parse(saved);
    }
  });

  //sparar det man skrivit i form
  function saveInfo() {
    if (inputLast.exercise && inputLast.sets && inputLast.reps && inputLast.weight) {
      savedexercise = [...savedexercise, { ...inputLast }];
      localStorage.setItem('progressionLogs', JSON.stringify(savedexercise));
      //nollställer formuläret
      inputLast = {
        exercise: '',
        sets: '',
        reps: '',
        weight: '',
      };
    }
  }
</script>

<main>
  <div class="container-h1"><h1><strong>Progressionsloggbok</strong></h1></div>

  <form on:submit|preventDefault={saveInfo} class="form-savedexercises"> <!-- formulär som skapar värden till variablerna -->
    <label>
      Övning:<input bind:value={inputLast.exercise} placeholder="Namnet på övningen"/>
    </label>
    <label>
      Set: <input type="number" bind:value={inputLast.sets}/>
    </label>
    <label>
      Reps:<input type="number" bind:value={inputLast.reps}/>
    </label>
    <label>
      Vikt (kg):<input type="number" bind:value={inputLast.weight}/>
    </label>
    <button type="submit">Spara övning</button> <!-- knapp som sparar data -->
  </form>

  
  {#if savedexercise.length > 0} <!-- om det finns något i listan... ska de visas i en lista -->
  <div class="container-h2"><h2>Sparade loggar</h2></div>
    <ul class="list-savedexercises">
      {#each savedexercise as savedexercises, index (index)}
        <li>
          <strong>{savedexercises.exercise}</strong> kördes {savedexercises.sets}x{savedexercises.reps} med {savedexercises.weight}kg
        </li>
      {/each}
    </ul>
  
  {/if}
</main>

<style>
  main {
    max-width: 700px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1, h2 { /* texterna */
    text-align: center;
  }

  .form-savedexercises {/* styling/funktionalitet formuläret */
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 6px solid wheat;
  }

  label { /* inmatning */
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  input { /* styling för texten som skrivs in */
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
  }

  button { /* knappen som sparar */
    padding: 0.7rem;
    background: #007BFF;
    color: white;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
  }

  .list-savedexercises li { /* listan som visar gamla övningar --> separat */
    background: gray;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
  }
  .container-h2 { /* innehåll för sparade loggar */
    text-align: center;
    background: gray;
    border-top: 5px solid #ddd;
    padding: 0.5rem 0px;
    width: 20%;
    border-radius: 0.2rem;
    margin: 0 auto;
    transform: translateY(10px);
  }
  .container-h1 { /* innehåll för formuläret */
    text-align: center;
    background: #f5f5f5;
    border-top: 5px solid wheat;
    padding: 1rem 0px;
    width: 30%;
    border-radius: 0.7rem;
    margin: 0 auto;
    transform: translateY(10px); 
  }
</style>
