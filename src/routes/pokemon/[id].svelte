<script lang="ts" context="module">
	import { pokeStore } from '$lib/stores/poke';

	/** Fetch pokemon data & pass it to the component as a prop */
	export async function load({ page }) {
		const id = page.params.id;
		
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

		const response = await fetch(url);

		const pokemon = await response.json();

		pokemon[
			'frontShiny'
		] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;

		pokemon[
			'backShiny'
		] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`;
		return { props: { pokemon } };
	}
</script>

<script lang="ts">
	export let pokemon: Poke;
	const type = pokemon['types'][0].type.name;
	console.clear();
</script>

<svelte:head>
	<title>Pokemon - {pokemon.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokemon['height']}</strong>
		| Weight: <strong>{pokemon['weight']}</strong>
	</p>
	<img
		class="my-20"
		alt="{`${pokemon.name} image`}"
	     	style="width:20rem;height:20rem;"
		src="{`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}"
		
	/>

	<div class="flex flex-row">
		<img style="width: 14rem;" alt="{pokemon.name} image" src="{pokemon['frontShiny']}" />

		<img style="width: 14rem;" alt="{pokemon.name} image" src="{pokemon['backShiny']}" />
	</div>
</div>
