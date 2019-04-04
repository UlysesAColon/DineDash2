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
        title: 'placeholder title',
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

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
    }
    render() {
        const { classes } = this.props;
        
        return (
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
            id="filled-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            className={classes.textField}
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
        <input type="submit" value="Submit" />
     </form>
       );
    }
}
  
  LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LoginForm);