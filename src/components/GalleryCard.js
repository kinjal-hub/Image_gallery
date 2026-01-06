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
        }}
      >
        <CardMedia component="img" height={250}  image={img} alt={title} />
        <CardContent>
          <Typography variant="h6" component="div" sx={{ margin: 0, padding: 0 }}>
            {title}
          </Typography>
          <Typography variant="h6" component="div" sx={{ margin: 0, padding: 0 }}>
            {price}
          </Typography>
          <Typography variant="h6" component="div" sx={{ margin: 0, padding: 0 }}>
            {category}
          </Typography>
          <Typography variant="h6" component="div" sx={{ margin: 0, padding: 0 }}>
            {stock}
          </Typography>
          <Typography variant="h6" component="div" sx={{ margin: 0, padding: 0 }}>
            {rating}
          </Typography>
          <Typography variant="h6" component="div" sx={{ margin: 0, padding: 0 }}>
            {description}
          </Typography>
          <Button size="small" sx={{margin:1}} variant='outlined' color='success' onClick={handleAddToFavorites}>
            Add to favorite
          </Button>
          </CardContent>
        </Card>
    </CardActionArea>
  );
};

export default GalleryCard;