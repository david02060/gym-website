<script>
    let weight = null;
    let height = null;
    let bmi = null;

    function calBMI() { // funktionen som räknar ut BMI, med avseende på vikt och längd
        if (weight > 0 && height > 0) {
            const heightMeters = height / 100;
            bmi = weight / (heightMeters * heightMeters);
        } else {
            bmi = "null"; //om någon parameter är negativ exempelvis
            alert("Vänligen ange giltiga värden för vikt och längd.");
        }
    
    }
</script>

<main>
    <div class="container-header"> <!-- liten separat ruta för rubrik --><h1><strong>BMI kalkylator</strong></h1></div>
    <div class="container-form"> <!-- kontainern för formuläret -->
    <form on:submit|preventDefault={calBMI}>
        <label for="weight">Vikt (kg):</label>
        <input type="number" id="weight" bind:value={weight} />

        <label for="height">Längd (cm):</label>
        <input type="number" id="height" bind:value={height} />

        <button type="submit">Beräkna BMI</button>
    </form>

    {#if bmi > 0} <!-- "ditt bmi ör:" visas bara om bmi får ett värde (positivt) -->
        <p>Ditt BMI är: {bmi.toFixed(1)}</p>
    {/if}
    </div>
</main>

<aside> <!-- en bild i en ruta visas vid True -->
     {#if bmi > 0} 
     <div class="container-img">
        <div class="image-bmi"></div>
     </div>
    {/if}
    
</aside>

<style>
    main {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem 1rem;
        text-align: center;
    }

    h1 { /* styling rubriktext */
        color: #000000;
        font-weight: semibold;
    }
    .container-header { /* styling för rubriken låda (som sticker upp) */
    text-align: center;
    background: gray;
    border-top: 4px solid black;
    padding: 1rem 0.5rem;
    width: 30%;
    border-radius: 0.7rem;
    margin: 0 auto;
    transform: translateY(26px); 
  }

    .container-form { /* konteiner för formuläret */
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem 1rem;
        background-color: gray;
        border-radius: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 5px solid black;

    }

    form { /* funktionalitet formulär */
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label { /* de t som står i självaste rutorna (formulär) */
        font-weight: bold;
        color: black;
    }

    button { /* knappen som "söker/fixar svar" */
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 0.4rem;
        cursor: pointer;
    }

    button:hover {/* knappens funktion  */
        background-color: #0056b3;
        transform: translateY(-2px);
        transition-duration: 0.3 s ease;
    }

    .container-img { /* låda bakom bilden */
        max-width: 600px;
        margin: 0 auto;
        padding: 0.5rem 0.5rem;
        background-color: gray;
        border-radius: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .image-bmi { /* funktionalitet för bilden på bmi */
		width: 100%;
		aspect-ratio: 12/9;
		background-image: url('https://www.bostonmedicalgroup.com/wp-content/uploads/2022/12/body-mass-index-1024x663.png');
		background-size: cover;
		background-position: center;
		border-radius: 0.4rem;
		margin-bottom: 2rem;
		transition: background-image 0.3s ease;
	}
</style>