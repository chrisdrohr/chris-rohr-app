import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, pink } from '@material-ui/core/colors';
import { CssBaseline, withWidth } from '@material-ui/core';
import Body from './Body';
import { database } from './firebase';
import { prod } from './Constants';
import Freelance from './Components/Freelance';
import './App.css';
import Background from './Background';
import Scene from './Scene';
import Header from './Header';

const history = createBrowserHistory();
const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
    type: 'dark'
  },
  typography: {
    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
    useNextVariants: true
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: 'rgba(17, 17, 34, 0.9)'
      }
    },
    MuiBottomNavigationAction: {
      label: {
        color: 'white'
      }
    }
  }
});
let ticking = false;
class App extends Component {
  state = {
    components: [],
    profile: false,
    resume: false,
    portfolio: false,
    music: false
  };

  setComponents = components => {
    this.setState({ components: components });
  };
  componentDidMount() {
    window.scrollTo(0, 0)
    document.addEventListener(
      'scroll',
      () => this.onScroll(this.state.components),
      false
    );
    if (prod) {
      this.addVisitor();
    }
  }
  onScroll(components) {
    if (components.length !== 0) {
      requestAnimationFrame(() => {
        // console.log(components[0].height / 2 > window.scrollY, components[0].bottom > window.scrollY);
        // console.log('resume', components[1].top - 200 < window.scrollY, components[1].bottom, components[1].bottom - 200 > window.scrollY);
        // console.log('resume', components[2].top - 200 < window.scrollY, components[2].bottom > window.scrollY);

        if (
          !this.state.profile &&
          components[0].height / 2 > window.scrollY &&
          components[0].bottom > window.scrollY
        ) {
          this.setState(
            {
              profile: true,
              resume: false,
              portfolio: false,
              music: false
            },
            // () => console.log('Profile is visible')
          );
        }
        if (
          !this.state.resume &&
          components[1].top - 200 < window.scrollY &&
          components[1].bottom - 200 > window.scrollY
        ) {
          this.setState(
            {
              profile: false,
              resume: true,
              portfolio: false,
              music: false
            },
            // () => console.log('Resume is visible')
          );
        }
        if (
          !this.state.portfolio &&
          components[2].top - 200 < window.scrollY &&
          components[2].bottom - 200 > window.scrollY
        ) {
          this.setState(
            {
              profile: false,
              resume: false,
              portfolio: true,
              music: false
            },
            // () => console.log('Portfolio is visible')
          );
        }
        if (
          !this.state.music &&
          components[3].top - 200 < window.scrollY &&
          components[3].bottom - 200 > window.scrollY
        ) {
          this.setState(
            {
              profile: false,
              resume: false,
              portfolio: false,
              music: true
            },
            // () => console.log('Music is visible')
          );
        }
        ticking = false;
      });
      ticking = true;
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
    const state = this.state;
    const page = {
      profile: state.profile,
      resume: state.resume,
      portfolio: state.portfolio,
      music: state.music
    };
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
                      <Scene page={page} width={this.props.width} />
                      <Header page={page} width={this.props.width} />
                      <Body
                        page={page}
                        setComponents={this.setComponents}
                        width={this.props.width}
                      />
                    </React.Fragment>
                  )}
                />
                <Route
                  exact
                  path={'/services'}
                  render={() => (
                    <React.Fragment>
                      <Background width={this.props.width} />
                      <Freelance />
                    </React.Fragment>
                  )}
                />
              </Switch>
            </main>
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withWidth()(App);
