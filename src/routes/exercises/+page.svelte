<script>
  export let data;

  let selectedExercise = null; //ingen tryckt övning
  let showExercise = false; //och visar därmed ingen popup
 
  function openExercise(exercise) { //öppnar popup
    selectedExercise = exercise;
    showExercise = true;
    document.body.style.overflow = 'hidden';
  }

  function closeExercise() {//stänger popup
    selectedExercise = null;
    showExercise = false;
    document.body.style.overflow = '';
  }
</script>

<main>
  <div class="container-total">
    <h1>The Exercise Database</h1>
    <a href="/search" class="search-button">Vill du söka efter en övning?</a>
    <div class="grid"> <!-- rutorna med övningarna -->
      {#each data.exercises as exercise}
        <div class="exercise-card" on:click={() => openExercise(exercise)}> <!-- om man trycker ska en popup komma fram -->
          <h3>{exercise.name}</h3>
            <img src={exercise.gifUrl} />
          <div class="text-vis"> <!-- den visuella (vis) texten -->
            <p>Kroppsdel: {exercise.bodyPart}</p>
            <p>Utrustning: {exercise.equipment}</p>
            <p>Mål-Muskel: {exercise.target}</p>
          </div>
        </div>
      {/each}
    </div>
</div>
<div> <!-- div  är det som definerar allt som ska komma fram i popupen -->
  {#if showExercise && selectedExercise}
    <!-- stänga vid tryck -->
    <div class="popup-1" on:click={closeExercise}>
      <div class="popup" on:click|stopPropagation>
        <button class="close-btn" on:click={closeExercise}>x</button>
        <h2>{selectedExercise.name}</h2>
        
        <div class="popup-content"> <!-- innehåll i popup -->
          <div class="container-gif">
            <img src={selectedExercise.gifUrl}/>
          </div>
          
          <div class="instructions">
            <h3>Instruktioner</h3>
            {#each selectedExercise.instructions as instruction, i}
                <li>{instruction}</li>
              {/each}
          </div>
        </div>
        
        <div class="exercise-meta"> <!-- det som kommerupp längst ner i popupen -->
          <p><strong>Kroppsdel:</strong> {selectedExercise.bodyPart}</p>
          <p><strong>Utrustning:</strong> {selectedExercise.equipment}</p>
          <p><strong>Primär-Muskel:</strong> {selectedExercise.target}</p>
          <p><strong>Sekundär-Muskel:</strong> {selectedExercise.secondaryMuscles}</p>
        </div>
      </div>
    </div>
  {/if}
  </div>
</main>
<style>
  .container-total { /* innehåller allt */
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 15px;
    margin-top: 10px;
  }
  
  
  h1 { /* styling text */
    text-align: center;
    color: #000000;
    margin-bottom: 30px;
    font-size: larger;
    font-weight: bold;
  }
  
  .grid { /* hur korten agerar */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .exercise-card { /* styling för individuella kort */
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    transition: transform 0.2s;
    cursor: pointer;
    background-color:antiquewhite;
  
  }
  
  .exercise-card:hover { /* hover effekt för kort */
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  h3 { /* styling texttyp */
    margin-top: 0;
    color: #2c3e50;
    font-weight: bold;
  }
  
  img { /* funktionalitet för bilden/GIF:en */
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .text-vis {/*  texten som syns innan man trycker*/
    margin: 5px 0;
    font-size: 0.9rem;
    color: #555;
  }

  
  .popup-1 { /* funktionalitet samt styling popup */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .popup { 
    background: white;
    border-radius: 8px;
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 25px;
    position: relative;
  }
  
  .close-btn { /* knappen man stänger popupen med */
    position: absolute;
    color: black;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 5px 10px;
  }
  
  .popup-content { /* funktionalitet popupen */
    display: flex;
    gap: 20px;
    margin: 20px 0;
  }
  
  .container-gif { /* hur GIF:en agerar */
    flex: 1;
  }

  .search-button { /* knappen som tar en till sök (stuling) */
  display: inline-block;
  margin-bottom: 1rem;
  background-color: #007BFF;
  color: white;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  border-radius: 0.4rem;
  font-weight: bold;
  position: center;
  transition: background-color 0.3s ease;
}

.search-button:hover { /* hoverr efekt sökknapp */
  background-color: #0056b3;
}
  

  .instructions { /* text styling för instruktonerna i popuop */
    flex: 1;
    color: black;
  }
  
  .exercise-meta { /* text längst ner i popup */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: auto;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    margin-bottom: auto;
    color: black;
  }
  
 
</style>