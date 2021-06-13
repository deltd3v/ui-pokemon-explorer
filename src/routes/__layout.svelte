<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Link from '$lib/components/Link/index.svelte';
	import { pokeFetch } from '$lib/api/poke';

	onMount(() => {
		// fetch all pokemons from network or session storage and set them in the svelte store
		pokeFetch();

		// replace all the attributes 'data-feather="feather-icon-name"'
		window['feather']['replace']();
	});

	console.clear();
</script>

<!-- Grab the feather-icons js bundle from cdn -->
<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
</svelte:head>

<header>
	<nav>
		<Link path="{$page.path}" url="/" label="Pokemons" />
		<Link path="{$page.path}" url="/info" label="Info" />
	</nav>

	<h1>Poke Explorer</h1>
</header>

<main>
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind utilities;
	@tailwind components;

	header,
	header nav {
		@apply flex;
		@apply w-screen;
		@apply items-center;
		@apply justify-center;
	}

	header {
		@apply fixed;

		@apply z-50;
		@apply h-24;
		@apply py-4;
		@apply flex-col;
	}

	header nav {
		@apply flex-row;
	}

	header {
		background-color: black;
	}

	header,
	header nav {
		color: white;
	}

	main {
		@apply z-0;
		@apply absolute;
		@apply top-24;
		@apply left-0;
		@apply w-full;
	}
</style>
