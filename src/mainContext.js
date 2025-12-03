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
    setNumber(prevNumber => prevNumber + id);
    console.log("in increment method" , {number})
  };
   
  const decrement = ( id ) => {
    setNumber(prevNumber => prevNumber - id);
  };
  console.log({number});
  return (
    <MainContext.Provider value={{ number, increment, decrement }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
