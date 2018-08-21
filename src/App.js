import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import React, { Component } from 'react';
import './App.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    margin: 100
  },
  buttons: {
    flexGrow: 1
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    const { width } = this.props;

    const typeSize = {
      xs: 'display3',
      sm: 'display3',
      md: 'display4',
      lg: 'display4',
      xl: 'display4'
    };

    const links = [
      { name: 'GitHub', url: 'https://github.com/philals' },
      { name: 'Twitter', url: 'https://twitter.com/phil_als' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/philalsford/' }
    ]

    return (
      <div>
        <div className={classes.root}>
          <Typography variant={typeSize[width]} align='center' gutterBottom>Hey, I'm Phil ;)</Typography>
        </div>


        <Grid container className={classes.buttons} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={40}>
              {links.map((value, i) => (
                <Grid key={i} item>
                  <Button variant="outlined" href={value.url} size="large" color="primary" className={classes.button}>
                    {value.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>


      </div>
    );
  }
}

export default withStyles(styles)(withWidth()(App));
