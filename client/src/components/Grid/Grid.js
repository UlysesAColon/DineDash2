import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import face from '../../images/face.jpg';
import blackpanther from '../../images/blackpanther.png';
import robot from '../../images/robot.jpg';
import gorilla from '../../images/gorilla.jpg';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


const theme = createMuiTheme({
  palette: {
      action:{
          active: '#1d1e22'
      },
      primary: {
        main:'#7c40ff',
  },
      text: '#1d1e22'
}
})

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <div className="gridwrapper">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <h1>Welcome to DineDash!</h1>
          <hr></hr>
          <div>
          <p>The purpose of the site is to create a browser-based point of sale system. The User is intended to log in, create a menu, and then create tables that orders can be taken on.</p>  
          </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <div>
          <p className="title">The Team</p>
          <img src={face} alt="Ulyses face" className="faceimage" />
          <p>Ulyses Colon</p>
          <img src={blackpanther} alt="blackpanther" className="faceimage" />
          <img src={robot} alt="robot" className="faceimage" />
          <img src={gorilla} alt="gorilla" className="faceimage" />
          </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <div>
          <p>
            Login div
          </p>
          </div>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </div>
    </MuiThemeProvider>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);