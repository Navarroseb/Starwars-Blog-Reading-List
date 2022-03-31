import { getCharacters, getCharactersdetails, getPlanets, getPlanetsdetails} from "../api/api-starwar";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			charactersdetails: undefined,
			planets: [],
			planetsdetails: undefined,
			favoritos: []
		},
		actions: {
			getCharacters: () => {
				getCharacters()
					.then(value => {
						setStore({ characters: value });
					})
					.catch(error => {
						setStore({ characters: undefined });
					});
			},
			getCharactersdetails: id => {
				getCharactersdetails(id)
					.then(value => {
						setStore({ charactersdetails: value });
					})
					.catch(error => {
						setStore({ charactersdetails: {} });
					});
			},
			getPlanets: () => {
				getPlanets()
					.then(value => {
						setStore({ planets: value });
					})
					.catch(error => {
						setStore({ planets: undefined });
					});
			},
			getPlanetsdetails: id => {
				getPlanetsdetails(id)
					.then(value => {
						setStore({ planetsdetails: value });
					})
					.catch(error => {
						setStore({ planetsdetails: {} });
					});
			},
			
			addfavoritos: dato => {
				const store = getStore();
				setStore({ favoritos: [...store.favoritos, dato] });
				console.log(store.favoritos);
			},
			deletefavoritos: index => {
				const store = getStore();
				store.favoritos.splice(index, 1);
				setStore({ favoritos: [...store.favoritos] });
			}
		}
	};
};

export default getState;
