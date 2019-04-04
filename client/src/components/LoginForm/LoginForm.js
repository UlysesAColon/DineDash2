import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 100,
  },
});




class LoginForm extends React.Component {
    state ={
        welcome: 'Welcome, ',
        name: 'Please enter a username',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      }


    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
    });
    console.log(this.state.name)
    };

    render() {
        const { classes } = this.props;
        
        return (
            <div>
            <p>
            {this.state.welcome}{this.state.name}
            </p>
            <hr></hr>
            <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="filled-name"
            label="Username"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')} 
            margin="normal"
            variant="filled"
          />

          <TextField
          
          id="filled-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />

     </form>
     </div>
       );
    }
}
  
  LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LoginForm);