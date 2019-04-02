import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import KitchenIcon from '@material-ui/icons/Kitchen';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuTable from '../InputMenu/MenuTable';


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


function MenuFormGrid(props) {
  const { classes } = props;
  console.log(props)
  console.log(props.foodclass.subject[1])
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
          <p>This is where Menus will be created</p>
          <div className="centerbuttons">
          <Button variant="contained" color="primary" className={classes.button}>Add Menu Class
          <KitchenIcon className={classes.rightIcon} />
          </Button>
          &nbsp;
          <Button variant="contained" color="secondary" className={classes.button}>Add Menu Item
          <RestaurantIcon className={classes.rightIcon} />
          </Button>          
          </div>
          <div className="menutablesheet">
            <table className="menutable">
                <MenuTable foodclass={props.foodclass.subject[0]}/>
                <MenuTable foodclass={props.foodclass.subject[1]}/>
                <MenuTable foodclass={props.foodclass.subject[2]}/>
            </table>
          </div>
          <br></br>
          </div>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

MenuFormGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuFormGrid);