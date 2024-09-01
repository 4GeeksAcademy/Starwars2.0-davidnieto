const getState = ({ getStore, getActions, setStore }) => {
	return {
	  // almacenamiento central
	  store: {
		swapiUrl: " https://swapi.tech/api/",
		people: JSON.parse(localStorage.getItem("people")) || [],
		vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
		planets: JSON.parse(localStorage.getItem("planets")) || [],
		favorites: [],
	  },
	  // funciones
	  actions: {
		getCharacters: async (endpoint) => {
		  try {
			const store = getStore();
			if (store[endpoint].length > 0) {
			  return;
			}
			const response = await fetch(store.swapiUrl + endpoint);
			if (response.ok) {
			  const data = await response.json();
			  const baseList = data.results;
			  baseList.forEach(async (baseItems) => {
				const newResponse = await fetch(baseItems.url);
				const detailData = await newResponse.json();
				setStore({ [endpoint]: [...store[endpoint], detailData.result] });
				if (store[endpoint].length === 10) {
				  localStorage.setItem(endpoint, JSON.stringify(store[endpoint]))
				}
  
			  });
			}
		  } catch (error) { }
		},
		addFavorite: (id, type) => {
		  const store = getStore();
		  const newFavorite = store[type].find((item) => item._id === id)
		  const onlyOne = store.favorites.some((item) => item === newFavorite);
		  if (!onlyOne) {
			setStore({ favorites: [...store.favorites, newFavorite] });
			return;
		  }
		  const favoritesFiltered = store.favorites.filter((favorite) => {
			return favorite !== newFavorite;
		  });
		  setStore({ favorites: [...favoritesFiltered] });
		},
		removeFavorite: (id) => {
		  const store = getStore();
		  const favoritesFiltered = store.favorites.filter((favorite) => {
			return favorite !== id;
		  });
		  setStore({ favorites: [...favoritesFiltered] });
		},
	  },
	};
  };
  
  export default getState;