import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useMainContext } from '../mainContext'; 

const GalleryCard = ({ img, id, title, price, category, stock, rating, description, onClick }) => {
  const { addtoCart } = useMainContext(); 

  const handleAddToFavorites = (e) => {
    e.stopPropagation();
    // console.log("Adding card id", id)
    addtoCart({ id, img, title }); 
  };

  return (
    <CardActionArea onClick={() => onClick(id)}>
      <Card
        sx={{
          maxWidth: 345,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: "30px",
          margin: '5px',
          padding:'5px'
        }}
      >
        <CardMedia
        component="img"
        height={250}
        image={img}
        alt={title}
        sx= {{ borderRadius: "30px", padding: '1px', margin: '1px'}}
        />
        <CardContent>
          <Typography variant="h6" component="div" sx={{ margin: '1px', padding: '1px' }}>
            {title}
          </Typography>
          
          <Button size="small" sx={{mb:'5px'}} variant='contained'  onClick={handleAddToFavorites}>
            Add to favorite
          </Button>
          </CardContent>
        </Card>
    </CardActionArea>
  );
};

export default GalleryCard;