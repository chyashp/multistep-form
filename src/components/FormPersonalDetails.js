import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const theme = createTheme();

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Enter Personal Details</Typography>
            </Toolbar>
          </AppBar>
          <TextField
            label="Occupation"
            placeholder="Enter your Occupation"
            onChange={handleChange("occupation")}
            value={values.occupation}
            fullWidth
            margin="normal"
          />
          <br />
          <TextField
            label="City"
            placeholder="Enter your city"
            onChange={handleChange("city")}
            value={values.city}
            fullWidth
            margin="normal"
          />
          <br />
          <TextField
            label="Bio"
            placeholder="Enter your Bio"
            onChange={handleChange("bio")}
            value={values.bio}
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
          <Button
            variant="outlined"
            color="primary"
            style={styles.button}
            onClick={this.back}
          >
            Back
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

export default FormPersonalDetails;
