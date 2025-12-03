import { useContext } from "react";
import { MainContext } from "../mainContext"; 
import { Box, Button } from '@mui/material';

const Favorite = () => {
   const { number, increment, decrement } = useContext(MainContext); 
    console.log("Current value from Favorite page:", { number });
    return (
        <div>
            <h1 style={{ margin: '70px', padding: '10px' }}>This is Favorite Page.</h1>
            <h2> {number} </h2>
            <Box display="flex" gap={0.5} justifyContent={"center"}>
                
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => decrement(1)} 
                >
                    Decrement
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => increment(1)} 
                >
                    Increment
                </Button>
            </Box>
        </div>
    );
};
export default Favorite;
