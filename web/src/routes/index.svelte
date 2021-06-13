<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import PokeSearch from '$lib/components/PokeSearch/index.svelte';
	import PokeCard from '$lib/components/PokeCard/index.svelte';
	import { pokeFilteredStore } from '$lib/stores/poke';
	console.clear();
</script>

<svelte:head>
	<title>Pokemon Explorer</title>
</svelte:head>

<main>
	<PokeSearch />

	<div class="md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-6">
		{#each $pokeFilteredStore.filtered as pokemon (pokemon.id)}
			<PokeCard pokemon="{pokemon}" />
		{/each}
	</div>
</main>

<style>
	main div {
		@apply grid;
		@apply gap-3;
		@apply py-4;
	}
</style>
