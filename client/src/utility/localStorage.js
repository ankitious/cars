export const loadFavorites = () => {
    try{
      const serializedFavorites = localStorage.getItem('favorites');
      if(serializedFavorites === null) {
          return undefined;
      }
      return serializedFavorites;
    } catch (e) {
        return undefined;
    }
};

export const saveFavorites = (favorites) => {
    try {
        localStorage.setItem('favorites', favorites);
    } catch (e) {
        console.log('Error while saving to local storage ', e);
    }
};
