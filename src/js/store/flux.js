import { getCharacter, getCharactersdetail, getPlanet, getPlanetsdetail} from "../api/api";
const getState = ({ getStore, setStore }) => {
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
				getCharacter()
					.then(value => {
						setStore({ characters: value });
					})
					.catch(error => {
						setStore({ characters: undefined });
					});
			},
			getCharactersdetails: id => {
				getCharactersdetail(id)
					.then(value => {
						setStore({ charactersdetails: value });
					})
					.catch(error => {
						setStore({ charactersdetails: {} });
					});
			},
			getPlanets: () => {
				getPlanet()
					.then(value => {
						setStore({ planets: value });
					})
					.catch(error => {
						setStore({ planets: undefined });
					});
			},
			getPlanetsdetails: id => {
				getPlanetsdetail(id)
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
