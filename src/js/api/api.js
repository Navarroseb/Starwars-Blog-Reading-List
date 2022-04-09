export const getCharacters = async () => {
	try {
		return fetch("https://www.swapi.tech/api/Characters?page=1&limit=100", {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.results);
	} catch (error) {
		return [];
	}
};
export const getCharactersdetails = async id => {
	try {
		return fetch(`https://www.swapi.tech/api/Charactersdetails/${id}`, {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.result);
	} catch (error) {
		return {};
	}
};
export const getPlanets = async () => {
	try {
		return fetch("https://www.swapi.tech/api/planets?page=1&limit=100", {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.results);
	} catch (error) {
		return [];
	}
};
export const getPlanetsdetails = async id => {
	try {
		return fetch(`https://www.swapi.tech/api/planets/${id}`, {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.result);
	} catch (error) {
		return {};
	}
};

