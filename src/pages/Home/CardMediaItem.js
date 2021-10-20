import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(() => ({
    root:{
        color: '#fff',
        background:'inherit',
    },
    img:{
        width:'80px',
        height:'100%',
    },
}))

export default function MediaCard({cardHead, cardDescription, cardImageSrc}) {
    const classes = useStyles()
    return (
    <Card className={classes.root} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="80"
        width="60px"
        image={cardImageSrc}
        alt="green iguana"
        className={`${classes.img}`}
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" >
          {cardHead}
        </Typography>
        <Typography className={classes.root}  variant="body2" color='textSecondary'>
            {cardDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}