import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const theme = createTheme();

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Enter User Details</Typography>
            </Toolbar>
          </AppBar>
          <TextField
            label="First Name"
            placeholder="Enter your First Name"
            onChange={handleChange("firstName")}
            value={values.firstName}
            fullWidth
            margin="normal"
          />
          <br />
          <TextField
            label="Last Name"
            placeholder="Enter your Last Name"
            onChange={handleChange("lastName")}
            value={values.lastName}
            fullWidth
            margin="normal"
          />
          <br />
          <TextField
            label="Email"
            placeholder="Enter your Email"
            onChange={handleChange("email")}
            value={values.email}
            fullWidth
            margin="normal"
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
