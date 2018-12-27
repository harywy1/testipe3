import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import red from '@material-ui/core/colors/red';
import Paper from '../layout/Paper'


const styles = theme => ({
  card: {
    maxWidth: 1900,
  },
  media: {
    height: 0,
    
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

 

  render() {
    const { classes } = this.props;
    
    return (
      <Card className={classes.card}>
        
        <CardMedia
          className={classes.media}
          image="https://blog.tortugabackpacks.com/wp-content/uploads/2017/06/airbnb-alternatives.jpg"
          
        />
          <main className={classes.content}>
        <div className={classes.toolbar} />
            <Paper />
            
        </main> 
        
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);