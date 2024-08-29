import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const theme = createTheme();

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Success</Typography>
            </Toolbar>
          </AppBar>
          <div style={styles.container}>
            <h1>Thank You for Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const styles = {
  container: {
    padding: 20,
    textAlign: 'center',
  },
};

export default Success;
