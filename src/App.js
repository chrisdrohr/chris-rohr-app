import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, pink } from '@material-ui/core/colors';
import { CssBaseline, withWidth } from '@material-ui/core';
import Profile from './Profile';
import {database} from './firebase';
import './App.css';
import Background from './Background';
const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: pink
  },
  typography: {
    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
    useNextVariants: true
  }
});

class App extends Component {
  componentDidMount() {
    this.addVisitor();
  }
  addVisitor = async () => {
      const data = {
        device: window.navigator.platform,
        date: new Date(Date.now()).toDateString(),
      }
      await database().ref('visits').push(data);
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <main className="App">
              <Background {...this.props} />
              <Profile {...this.props} />
          </main>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withWidth()(App);
