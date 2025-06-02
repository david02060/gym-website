<script>
  export let data;
  let search = data.query ?? '';
</script>

<main>
    <div class="container-form"> <!-- det som håller allt -->
    <h1>Sök efter övningar här:</h1>
    

  <form method="GET" action="/search" class="container-search"> <!--självaste formuläret som hämtar informationen  -->
    <input type="text-input" name="q" bind:value={search} placeholder="Sök här efter kroppsdel, utrustning eller annan detalj..."/>
    <button type="submit">Sök</button>
  </form>
  </div>
  <div class="container-resultat"> <!-- rutan som visar resultatet, eller visar att resultatet ej finns -->
  {#if search}
    {#if data.exercises.length > 0}
        <div class="grid">
        {#each data.exercises as exercise}
            <div class="exercise-card">
            <h3>{exercise.name}</h3>
            <img src={exercise.gifUrl} alt={exercise.name} />
            <div class="text-vis">
                <p><strong>Kroppsdel:</strong> {exercise.bodyPart}</p>
                <p><strong>Utrustning:</strong> {exercise.equipment}</p>
                <p><strong>Mål-Muskel:</strong> {exercise.target}</p>
            </div>
            </div>
        {/each}
        </div>
    {:else}
        <p>Det finns ingen övning som heter "{search}"</p>
    {/if}
{:else} <!-- om övningen inte finns -->
    <p>För att finna övning, vänligen ange sökning</p>
{/if}
</div>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  .container-resultat { /* funktionalitet för resultatlådan */
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    background-color: gray;
    border-radius: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .container-form { /*funktionalitet för formuläret */
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem;
    background-color: gray;
    border-radius: 1rem;
  }

  .container-search { /* sök-formuläret */
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 0.5rem;
  }

  input[type="text-input"] { /* sökfältet styling */
    max-width: 400px;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.4rem;
    border: 1px solid #ccc;
  }

  button { /* knappens funktionalitet samt styling */
    padding: 0.5rem 1rem;
    background: #007BFF;
    color: white;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
  }

  button:hover { /* knappens hover-effekt*/
    background: #0056b3;
  }

  .grid { /* kortens upprepning */
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .exercise-card { /* styling individuella kort */
    background: antiquewhite;
    padding: 1rem;
    border-radius: 0.6rem;
    text-align: center;
    transition: transform 0.3s;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }
  .exercise-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  img { /* bilderna/GIF */
    width: 100%;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
  }

  .text-vis { /* det som syns av texten */
    margin: 0.2rem 0;
    font-size: 0.9rem;
  }
</style>
