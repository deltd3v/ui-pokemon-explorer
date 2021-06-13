<script lang="ts">
	import { fade } from 'svelte/transition';
	export let pokemon: Poke;
</script>

<a transition:fade href="{`pokemon/${pokemon.id}`}" class="pokemon pokemon-{pokemon.id} ">
	<img src="{pokemon.imgUrl}" alt="{pokemon.name} image" />

	<h6>{pokemon.id} {pokemon.name}</h6>
</a>

<style>
	a.pokemon {
		@apply p-6;
		@apply bg-gray-50;
		@apply text-center;
		@apply text-gray-800;
		@apply rounded-md;
		@apply shadow-sm;
		@apply flex;
		@apply flex-col;
		@apply items-center;
	}

	a.pokemon:focus-within {
		@apply shadow-xl;
	}

	a.pokemon:hover,
	a.pokemon:focus-within {
		@apply outline-none;
	}

	a.pokemon:hover {
		@apply shadow-md;
		@apply outline-none;
		@apply transition-shadow;
	}

	a.pokemon:active {
		@apply shadow-none;
	}

	a img {
		--size: 8rem;
		width: var(--size);
		height: var(--size);
	}
</style>
