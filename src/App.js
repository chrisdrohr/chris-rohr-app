import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, pink } from '@material-ui/core/colors';
import { CssBaseline, withWidth } from '@material-ui/core';
import Body from './Body';
// import { database } from './firebase';
import { prod } from './Constants';
import Freelance from './Components/Freelance';
import './App.css';
import Background from './Background';
import Observer from './Observer';
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
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#112'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: 'rgba(17, 17, 34, 0.9)'
      }
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: '#112'
      }
    },
    MuiBottomNavigationAction: {
      label: {
        color: 'white'
      }
    }
  }
});

class App extends Component {
  state = {
    webGL: false
  };

  componentDidMount() {
    // this.detectWebGL();
 
   
    // if (prod) {
    //   this.addVisitor();
    // }
  }
 
  detectWebGL = () => {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl && gl instanceof WebGLRenderingContext) {
      console.log('Your browser supports WebGL');
      this.setState({ webGL: true });
    } else {
      console.log('Your browser does not support WebGL');
      this.setState({ webGL: false });
    }
  };

  // addVisitor = async () => {
  //   const data = {
  //     device: window.navigator.platform,
  //     date: new Date(Date.now()).toDateString()
  //   };
  //   await database()
  //     .ref('visits')
  //     .push(data);
  // };

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Router history={history}>
            <div className="App">
              <Observer>
                <Switch>
                  <Route
                    exact
                    path={'/'}
                    render={() => (
                      <React.Fragment>
                        {/* {state.webGL && props.width !== 'xs' ? (
                        <Scene width={props.width} />
                      ) : ( */}
                        <Background />
                        {/* )} */}
                        <Header width={props.width} />
                        <Body width={props.width} />
                      </React.Fragment>
                    )}
                  />
                  <Route
                    exact
                    path={'/services'}
                    render={() => (
                      <React.Fragment>
                        <Background width={props.width} />
                        <Freelance />
                      </React.Fragment>
                    )}
                  />
                </Switch>
              </Observer>
            </div>
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withWidth()(App);
