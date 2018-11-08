import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, pink } from '@material-ui/core/colors';
import { CssBaseline, withWidth } from '@material-ui/core';
import Profile from './Profile';
import { database } from './firebase';
import { prod } from './Constants';
import Freelance from './Components/Freelance';
import './App.css';
import Background from './Background';

const history = createBrowserHistory();
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
    if (prod) {
      this.addVisitor();
    }
  }
  addVisitor = async () => {
    const data = {
      device: window.navigator.platform,
      date: new Date(Date.now()).toDateString()
    };
    await database()
      .ref('visits')
      .push(data);
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Router history={history}>
            <main className="App">
              <Switch>
                <Route
                  exact
                  path={'/'}
                  render={() => (
                    <React.Fragment>
                      <Background {...this.props} />
                      <Profile {...this.props} />
                    </React.Fragment>
                  )}
                />
                <Route exact path={'/services'} component={Freelance} />
              </Switch>
            </main>
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withWidth()(App);
