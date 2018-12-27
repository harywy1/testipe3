import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import TextField from '../layout/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Search over 2 million homes in over 190 countries
        </Typography>
        <Typography component="p">
          <Grid container spacing={24}>
        <Grid item xs>
        <div className={classes.search}>
              
              <InputBase
                placeholder="Where to?"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
          </div>
        </Grid>
        <Grid item xs>
        <div className={classes.search}>
              
              <InputBase
                placeholder="Check In      ➝  Check Out"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
          </div>
        </Grid>
        <Grid item xs>
          <TextField />
        </Grid>
        <Grid item xs>
        <Button variant="SEARCH" color="error" className={classes.button}>
        SEARCH
        </Button>
        </Grid>
        </Grid>
        
        
        {/* <div className={classes.search}>
              
              <InputBase
                placeholder="Where to?"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
          </div> */}
         
          
        </Typography>
        <Typography>
          Explore the world
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);