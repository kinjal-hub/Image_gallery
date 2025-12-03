import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const GalleryCard = ({ img, id, title, onClick }) => {
  return (
    <CardActionArea onClick={() => onClick(id)}>
    <Card
    sx={{ maxWidth: 345,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
          >
      <CardMedia
        component="img"
        height={250}
        image={img}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ margin: 0, padding: 0 }}>
          {title}
        </Typography>
        <Button variant='outlined' color='success'>
          Add to favorite
        </Button>
      </CardContent>
    </Card>
    </CardActionArea>
  );
}

export default GalleryCard;