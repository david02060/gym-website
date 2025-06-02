<script>
	const buttons = [ //knapp lista
	  { text: "Övnings-bank", link: "/exercises" },
	  { text: "Mina pass", link: "/pass" },
	  { text: "BMI räknare", link: "/bmi" },
	  { text: "Om sidan", link: "/about" }
	];
  </script>
<main>
  <div class="container-whole">
	<div class="image-stor-top"></div> <!-- bilden som är på toppen -->
	<div class="content"> <!-- konteiner för allt (förutom storbilden) -->
	  <div class="text-info"> <!-- textrutan -->
		<p><strong>Välkommen till den bästa tränings hemsidan</strong></p>
		<p>Här finner du allt till ditt träningspass till ett sätt att räkna ut ditt BMI</p>
		<p>Du navigerar genom knapparna till höger (eller längst navigationsfältet)</p>
	  </div>
	  <div class="buttons"> <!-- knapparna för navigering till resten av sidan -->
		{#each buttons as button}
		  <a class="button" href={button.link}>{button.text}</a>
		{/each}
	  </div> <!-- Bilden som är till höger om bilderna -->
	  <div class="image-liten"></div>
	  </div>
	</div>
</main> 

  <style>
	.container-whole { /* centrerar allt och flexar innehållet */
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 1rem;
		max-width: 1200px;
		margin: auto;
	}
  
	.image-stor-top { /* funktionallitet för bilden på toppen */
		width: 100%;
		aspect-ratio: 21/9;
		background-image: url('https://wallpaperaccess.com/full/1078069.jpg');
		background-size: cover;
		background-position: center;
		border-radius: 0.4rem;
		margin-bottom: 2rem;
		transition: background-image 0.3s ease;
	}

	.image-liten { /* funktionalitet för lilla bilden */
		background-image: url('https://homeworkouts.org/wp-content/uploads/anim-kettlebell-one-arm-clean-and-jerk.gif');
		background-position: center;
		flex: 2;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-width: 150px;
		border-radius: 2rem;
		max-width: 250px;
		background-size: cover;	
		border: black 4px dotted;	
		min-height: 200px;
	}

	p { /* styling för texten nere vänster */
		color: black;
		margin-bottom: 1rem;
		font-size: 1rem;
	}
  
	.content { /* gör att objekt under stor-bilden flexar rätt */
		display: flex;
		flex-direction: row;
		gap: 2rem;
		width: 100%;
		flex-wrap: wrap;
	}
  
	.text-info { /* styling för text */
		flex: 2;
		min-width: 250px;
		font-size: 1.1rem;
		line-height: 1.6;
		align-items: center;
		margin: auto;
		border: #00B4D8 2px solid;
		border-radius: 0.4rem;
		margin-top: 4rem;
		background-color: white;
		padding: 1rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
  
	.buttons { /* funktionalitet knappar (positionering)*/
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-width: 200px;
		
	}
  
	.button { /* styling för individuella knappar*/
		padding: 0.8rem 1.5rem;
		border-radius: 9999px;
		background: linear-gradient(135deg, #007BFF, #00B4D8);
		color: white;
		text-align: center;
		font-weight: 600;
		box-shadow: 0 3px 6px rgba(0,0,0,0.1);
		border: 3px dotted white;
	}
  
	.button:hover { /* funktion för knappar */
		transform: translateY(-2px);
		background: linear-gradient(135deg, #0056b3, #0096c7);
	}
  
  </style>
  