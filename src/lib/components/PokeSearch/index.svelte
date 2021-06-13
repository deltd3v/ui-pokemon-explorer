<script lang="ts">
	import { pokeStore, pokeFilteredStore } from '$lib/stores/poke';
	import { onMount } from 'svelte';

	/** If user searches for a pokemon, filter the pokemon array and render it insteead */

	// this block is similar to a useEffect in *you-know-who*
	$: {
		if ($pokeFilteredStore.term) {
			pokeFilteredStore.update(state => {
				state.filtered = $pokeStore.filter(pokemon => {
					return pokemon.name.toLowerCase().includes(state.term.toLowerCase());
				});

				return state;
			});
		}

		if (!$pokeFilteredStore.term) {
			pokeFilteredStore.update(state => {
				state.filtered = [...$pokeStore];
				return state;
			});
		}
	}
</script>

<form>
	<section class="search-section">
		<label for="pokemon-search-input">Search for a pokemon</label>
		<br />
		<div class="search">
			<input
				id="pokemon-search-input"
				type="search"
				placeholder="pokemon name"
				bind:value="{$pokeFilteredStore.term}"
			/>

			<button class="search-btn" type="submit">
				<i data-feather="search"></i>
			</button>
		</div>
	</section>
</form>

<style>
	form {
		@apply w-full;
		@apply flex;
		@apply flex-row;
		@apply items-center;
		@apply justify-center;
	}

	form .search-section {
		@apply w-full;
		@apply flex;
		@apply items-center;
		@apply justify-center;
		@apply flex-col;
	}

	form .search-section > * {
		@apply my-2;
	}

	form .search-section .search {
		@apply flex;
		@apply flex-row;
		@apply w-full;
	}
	form .search-section .search > * {
		@apply rounded-md;
	}

	form .search-section .search .search-btn {
		@apply px-2;
		@apply py-4;
		@apply text-white;
		@apply bg-blue-500;
	}

	form .search-section .search .search-btn:hover {
		@apply bg-blue-700;
	}

	form .search-section .search .search-btn:focus {
		@apply outline-none;
		@apply bg-blue-700;
	}

	form .search-section .search input {
		@apply w-full;
		@apply p-4;
		@apply border;
		@apply border-gray-300;
	}
</style>
