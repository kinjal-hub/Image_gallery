import { useContext, useState } from "react";
import { MainContext } from "../mainContext";
import { Box, Button, TextField, List, ListItem, ListItemText, Typography } from '@mui/material';

const Favorite = () => {
  
  const { number, increment, decrement, addName, names } = useContext(MainContext);
  const [newName, setNewName] = useState('');
  
  console.log("Current value from Favorite page:", { number, names });

  
  const handleAddName = () => {
    if (newName) {
      addName(newName); 
      setNewName(''); 
    }
  };

  return (
    <div>
      <h1 style={{ margin: '70px', padding: '10px' }}>This is Favorite Page.</h1>
      <h2>Current value : {number}</h2>
      <Box display="flex" gap={0.5} justifyContent={"center"}>
        <Button variant="contained" color="primary" onClick={() => decrement(1)}> Decrement </Button>
        <Button variant="contained" color="secondary" onClick={() => increment(1)}> Increment </Button>
      </Box>

      
      <Box display="flex" gap={1} justifyContent={"center"} alignItems={"center"} mt={4}>
        <TextField 
          label="Enter Name" 
          variant="outlined" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          size="small" 
        />
        <Button variant="contained" color="primary" onClick={handleAddName}> 
          Add Name 
        </Button>
      </Box>
      <Box mt={4} justifyContent={"center"} textAlign={"center"}>
        <Typography variant="h6">Added Names:</Typography>
        {names && names.length > 0 ? (
          <List style={{ display: 'inline-block', textAlign: 'left' }}>
            {names.map((name, index) => (
              <ListItem key={index}>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No names added yet.</Typography>
        )}
      </Box>
    </div>
  );
};

export default Favorite;
