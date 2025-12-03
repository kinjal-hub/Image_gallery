import  { createContext, useState, useContext } from 'react';

export const MainContext = createContext({
  number: 0,
  increment: ( id ) => {},
  decrement: ( id ) => {}
});

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children }) => {
 
  const [number, setNumber] = useState(0);

  const increment = ( id ) => {
    setNumber(number + id);
  };

  const decrement = ( id ) => {
    setNumber(number - id);
  };

  return (
    <MainContext.Provider value={{ number, increment, decrement }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
