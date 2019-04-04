import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomerTable from './CustomerTable';
import { Button } from '@material-ui/core';



  
  class TableButton extends React.Component {
    render() {
      return (
        <Button {...this.props}>
          click
        </Button>
      );
    }  
  }
  
  class CustomerTableLanding extends React.Component {
    constructor() {
      super();
      
      this.state = {
        clicked: false
      };
      
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState({
        clicked: true
      });
    }
    
    render() {
      return (
        <div>
          <TableButton variant="contained" color="primary" onClick={this.handleClick} />
          {this.state.clicked ? <CustomerTable /> : null}
        </div>
      );
    }
  };

  export default CustomerTableLanding;
  