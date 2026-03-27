import { createContext, useState, useContext } from 'react';

export const MainContext = createContext({
  cart: [],
  addtoCart: (card) => {},
});

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const isFavorite = (id) => 
  {
      cart.some(item => item.id === id);
  }
  
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


  const removeFromCart = (id) => {
    setCart(prevcart => prevcart.filter(item => item.id !== id));
};
  return (
    <MainContext.Provider value={{  cart, addtoCart, removeFromCart, isFavorite }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
