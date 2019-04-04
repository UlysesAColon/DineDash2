import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomerTable from '../UserDashboard/CustomerTable/CustomerTable';
import { Button } from '@material-ui/core';

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


function FormattedDate(props) {
  return <h2>
  <hr></hr>The time right now is:&nbsp;
  <div>
  {props.date.toLocaleTimeString()}.
  </div></h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
  );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
}
  render(){
    return(
      <div>
        <h1> Hello, User</h1>
        <FormattedDate date={this.state.date} />
        <hr></hr>
      </div>
    );
  }
}




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
            <div>
              <Clock />
            </div>
            <br></br>
            <Button variant="contained" color="primary">Add Table Button</Button>
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