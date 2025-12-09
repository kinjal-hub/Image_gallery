import { createContext, useState, useContext } from 'react';

export const MainContext = createContext({
  favoriteCards: [],
  addFavoriteCard: (card) => {},
  incrementQuantity: (cardId) => {},
  decrementQuantity: (cardId) => {},
});

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  
  const addFavoriteCard = (newCard) => {
    setFavoriteCards(prevCards => {
      const existingCardIndex = prevCards.findIndex(card => card.id === newCard.id);

      if (existingCardIndex > -1) {
        
        const updatedCards = [...prevCards];
        updatedCards[existingCardIndex] = {
          ...updatedCards[existingCardIndex],
          quantity: updatedCards[existingCardIndex].quantity + 1
        };
        return updatedCards;
      } else {
        
        return [...prevCards, { ...newCard, quantity: 1 }];
      }
    });
  };
  const incrementQuantity = (cardId) => {
    setFavoriteCards(prevCards =>
      prevCards.map(card =>
        card.id === cardId
          ? { ...card, quantity: card.quantity + 1 }
          : card
      )
    );
  };

  const decrementQuantity = (cardId) => {
    setFavoriteCards(prevCards =>
      prevCards.map(card =>
        card.id === cardId && card.quantity > 1
          ? { ...card, quantity: card.quantity - 1 }
          : card
      )
    );
    
  };
  return (
    <MainContext.Provider
      value={{
        favoriteCards,
        addFavoriteCard,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
