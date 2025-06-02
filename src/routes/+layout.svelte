<script>
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { base } from '$app/paths';
</script>


	<nav> <!-- navigationsfältets omdirigeringar -->
		<a href="{base}/">Hem</a>
		<a href="{base}/pass">Mina pass</a>
		<a href="{base}/exercises">Övnings-bank</a>
		<a href="{base}/search">Sök efter övning</a>
		<a href="{base}/bmi">BMI räknare</a>
		<a href="{base}/about">Om sidan</a>
	</nav>
<slot /><!-- gör att annat går att synas framför-->


<style>
	:global(body), :global(html) { /* global styling för både body och html */
		margin: 0;
		font-family: 'Segoe UI', sans-serif;
		background-color: wheat;
		color: #333;
	}

	nav { /* styling navigationsfält */
		display: flex;
		justify-content: left;
		background-color: #333;
		padding: 0.1rem;
	}	
	a { /* styling för texten i navigationsfält */
		color: white;
		text-decoration: none;
		padding: 0.3rem 1rem;
		border: 2px solid #555;
		border-radius: 10px;
		margin-right: 10px;
		margin-left: 10px;
		max-height: auto;
	}

</style>
	