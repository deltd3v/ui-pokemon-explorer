import { pokeStore } from '$lib/stores/poke';

/** Returns a -collection of pokemons */
export async function pokeFetch(fetchLimitNumber = 150) {
	if (window.sessionStorage) {
		if (window.sessionStorage.getItem('pokemon')) {
			// Fetch the saved collection of pokemons from sessionStorage & avoid making
			// network call
			pokeStore.set(JSON.parse(window.sessionStorage.getItem('pokemon')));
			return;
		}

		if (!window.sessionStorage.getItem('pokemon')) {
			// Fetch a collection of pokemons from the network
			const POKEMONS_URL = `https://pokeapi.co/api/v2/pokemon?limit=${fetchLimitNumber}`;

			const response = await fetch(POKEMONS_URL);
			let data = await response.json();

			// normalize the data to match the type Poke
			data = data.results.map((poke, idx: number) => {
				const getImgUrl = (idx: number) =>
					`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
						idx + 1
					}.svg`;

				const getbackShinyUrl = (idx: number) =>
					`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${
						idx + 1
					}.png`;

				const getFrontShinyUrl = (idx: number) =>
					`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
						idx + 1
					}.png`;

				return {
					id: idx + 1,
					name: poke.name,
					imgUrl: getImgUrl(idx),
					backShiny: getbackShinyUrl(idx),
					frontShiny: getFrontShinyUrl(idx)
				} as Poke;
			});

			// set the fetched data to the store
			pokeStore.set(data);

			// save the fetched data to the sessionStorage
			window.sessionStorage.setItem('pokemon', JSON.stringify(data));

			return data as Poke[];
		}
	}
}
