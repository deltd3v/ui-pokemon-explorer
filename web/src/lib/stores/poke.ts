import { writable, Writable } from 'svelte/store';

/** Contains an array of pokemons */
export const pokeStore: Writable<Poke[]> = writable([]);

/** Contains an array of filtered pokemons */
export const pokeFilteredStore: Writable<{ term: string; filtered: Poke[] }> = writable({
	term: '',
	filtered: []
});
