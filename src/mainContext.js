import { createContext, useState, useContext } from 'react';

export const MainContext = createContext({
  cart: [],
  addtoCart: (card) => {},
});

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const findCardById = (cartArray, cardId) => {
  return cartArray.find(card => card.id === cardId);
};

  const  addtoCart = (newCard) => {
    
    const cardExists = findCardById(cart, newCard.id); 

    if (cardExists) {
      const updatedCart = cart.reduce((acc, currentCard) => {
        if (currentCard.id === newCard.id) {
          acc.push({
            ...currentCard,
            quantity: (currentCard.quantity || 1) + 1,
          });
        } else {
           acc.push(currentCard);
        }
        return acc;
      }, []); 
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { ...newCard, quantity: 1 }]);
    }
  };

  return (
    <MainContext.Provider value={{  cart, addtoCart }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
