import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomerTable from '../UserDashboard/CustomerTable/CustomerTable';

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

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className="gridwrapper">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Welcome "name" to your User Dashboard!</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div>
            This is where Tables will Propigate
            <CustomerTable />
          </div>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);