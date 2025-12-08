import { createContext, useState, useContext } from 'react';
export const MainContext = createContext({
  number: 0,
  names: [], 
  increment: (id) => {},
  addName: (name) => {},
});

export const useMainContext = () => useContext(MainContext);
export const MainContextProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  
  const [names, setNames] = useState([]);
  const increment = (id) => {
    setNumber(prevNumber => prevNumber + id);
    console.log("in increment method", { number });
  };

  const addName = (name) => {
    setNames(prevNames => [...prevNames, name]);
  };
  console.log({ number });
   return (
    <MainContext.Provider value={{
      number,
      names, 
      increment,
      addName, 
    }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
