import {  useState } from "react";

import { Button, Stack, Typography} from '@mui/material';

const Contact = () => {
  const [ count, setCount ] = useState(0);


  return (
    <div>
      <Typography variant="h6"
      sx={{ margin: '70px', padding: '10px', justifySelf:'center'}}>
        This is Contact Page.
      </Typography>
      
      
      <Typography variant="h5">Counter Value: {count}</Typography>
      <Stack display="flex"
      gap={0.5}
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent={"center"}
      sx={{p:4}}>
        <Button
        variant="contained"
        color="primary"
        onClick={() => setCount((prevcount) => prevcount + 1)}
        >
          Increment
        </Button>
        <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount((prevcount) => prevcount - 1) }
        >
          Decrement
        </Button>
      </Stack>

     </div>
  );
};

export default Contact;
