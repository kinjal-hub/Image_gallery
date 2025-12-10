import { createContext, useState, useContext } from 'react';

export const MainContext = createContext({
  favoriteCards: [], 
  addFavoriteCard: (card) => {}, 
});

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  
  
  const [favoriteCards, setFavoriteCards] = useState([]); 

  
  const addFavoriteCard = (card) => {
    setFavoriteCards(prevCards => [...prevCards, card]); 
  };

  
  return (
    <MainContext.Provider value={{ favoriteCards, addFavoriteCard }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;