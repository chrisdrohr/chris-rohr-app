import React, {Component, Fragment} from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { lightBlue, pink } from "@material-ui/core/colors";
import {CssBaseline, withWidth} from '@material-ui/core';
import Profile from "./Profile";
import './App.css';
import SnackMaker from "./SnackMaker";
import Background from "./Background";
const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: pink
    },
    typography: {
        fontFamily: "Open Sans, Helvetica, Arial, sans-serif",
        useNextVariants: true,
    }
});


class App extends Component {
    componentDidMount() {
    }
  render() {
      return (
        <React.Fragment>
            <CssBaseline/>
        <MuiThemeProvider theme={theme}>
            <div
                className="App">
                <SnackMaker>
                    {(functions) => (
                        <Fragment>
                            <Background {...this.props}/>
                            <Profile {...functions} {...this.props}/>
                        </Fragment>
                    )}
                </SnackMaker>
            </div>
        </MuiThemeProvider>
        </React.Fragment>
    );
  }
}

export default withWidth()(App);
