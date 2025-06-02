<main> <!-- rutan som håller allt inom sig -->
	<section class="text-content">  
	  <h1> Om <strong>The Greatest Exercise Bank </strong> </h1>
	  <h2>Byggd och konstruerad av ingen mindre än David Namin</h2>
	  <h3>Källor och API:</h3>
	  <p>Alla övningar, bilder och annan information som återfinns på sidan är hämtad från <strong><a href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb">ExerciseDB (API)</a></strong> som tillåter hämtning och användning av data till dess användare.</p>
        <p>Använder även information från <strong><a href="https://beskoweb.web.app/">BeskoWeb.</a></strong></p>

	</section>

	<div class="image"></div>
</main>

<style>
	main { /* stora boxen */
	  margin: 50px auto;
	  width: 80vw;
	  height: auto;
	  display: grid;
	  grid-template-columns: 2fr 1fr;
	  overflow: hidden;
	  gap: 20px;
	  background-color: aquamarine;
	  border-radius: 20px;
	  box-shadow: 0 0 15px rgba(0,0,0,0.2);
	  padding: 20px;
	  border: 10px solid black;

	}

	.text-content { /* allt för texten  */
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
        border-radius: 20px;
	}

	h1 { /* stora/översta rubriken */
		color: blueviolet;
		font-family: 'Times New Roman', Times, serif;
		font-size: 2em;
	}

	h2 { /* normala texten  */
		color: #666;
	}

	h3 { /* "källor och API" */
		color: #333;
		margin-top: 1rem;
	}


	a { /* länkarna som tar en till andra sidor (styling) */
		color: darkblue;
		text-decoration: underline;
	}

	.image { /* bilden i rutan */
		display: flex;
		align-items: center;
		justify-content: center;
        background-image: url('https://homeworkouts.org/wp-content/uploads/anim-kettlebell-one-arm-clean-and-jerk.gif');
        background-size: cover;
        border-radius: 20px;
        width: 100%;
        height: 300px;
        background-position: center;
        box-shadow: 0 0 50px rgba(0,0,0,0.2);
	}

</style>
