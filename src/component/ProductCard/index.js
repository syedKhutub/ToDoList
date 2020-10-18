import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
      maxWidth: 'fit-content',
      textAlign: '-webkit-center',
      margin: 'auto',
      marginTop: 50
    },
    media: {
      height: '45vh',
      minWidth: 250
    },
  });

const ProductCard = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Card >
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="/images/OnePlus.jpg"
                title="OnePlus Phone"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Mobile Phones
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Mobile Phones are a useful
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
        </Card>
        </Grid>
    );
}

export default ProductCard;