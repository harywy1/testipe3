import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Paper from '@material-ui/core/Paper'
import Background from '../layout/Background';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing.unit * 2,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing.unit * 3,
    width: 'auto',
  },
},
searchIcon: {
  width: theme.spacing.unit * 9,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},



});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar  style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Grid>
          <Typography variant="h4" color="error" className={classes.grow}>
          ☠ airbn
            </Typography>
            </Grid>
      
              <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Where to?"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <Typography variant="h4" color="error" className={classes.grow}>
         
            </Typography>
          
         
          <Button variant="outlined" color="black"className={classes.button}>
        Become a Host
      </Button>
          <Button color="black">Help</Button>
          <Button color="black">Sign Up</Button>
          <Button color="black">Log In</Button>
         

        </Toolbar>
      </AppBar>
            <Paper style={styles.paperContainer}>
                Some text to fill the Paper Component
            </Paper>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Background />
            
      </main>
    
    </div>
    
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

