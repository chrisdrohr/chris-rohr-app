import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, pink } from '@material-ui/core/colors';
import { CssBaseline, withWidth } from '@material-ui/core';
import Body from './Body';
// import { database } from './firebase';
import { prod, links } from './Constants';
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
    components: [],
    profile: false,
    resume: false,
    portfolio: false,
    music: false,
    webGL: false
  };

  setComponents = components => {
    this.setState({ components: components });
  };
  componentDidMount() {
    this.detectWebGL();
    window.addEventListener('load', () => {
      document.documentElement.scrollY = 0;
      this.observe();
      this.observeComponents();
    });
    // document.addEventListener(
    //   'scroll',
    //   () => this.onScroll(this.state.components),
    //   false
    // );
    // if (prod) {
    //   this.addVisitor();
    // }
  }
  observe = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    this.observer = new IntersectionObserver(this.callback, options);
  };
  callback = (entries, observer) => {
    const state = this.state;
    entries.forEach(async entry => {
      const { target, isIntersecting } = entry;
      // console.log(target.id, isIntersecting);
      switch (true) {
        case target.id === links.profile.name &&
          isIntersecting &&
          !state.profile:
          await this.setState(
            {
              profile: true,
              resume: false,
              portfolio: false,
              music: false
            },
            // () => console.log('Profile is visible')
          );
          break;
        case target.id === links.resume.name && isIntersecting && !state.resume:
          await this.setState(
            {
              profile: false,
              resume: true,
              portfolio: false,
              music: false
            },
            // () => console.log('Resume is visible')
          );
          break;
        case target.id === links.portfolio.name &&
          isIntersecting &&
          !state.portfolio:
          await this.setState(
            {
              profile: false,
              resume: false,
              portfolio: true,
              music: false
            },
            // () => console.log('Portfolio is visible')
          );
          break;
        case target.id === links.music.name && isIntersecting && !state.music:
          await this.setState(
            {
              profile: false,
              resume: false,
              portfolio: false,
              music: true
            },
            // () => console.log('Music is visible')
          );
          break;
        default: return null;
      }
    });
  };
  observeComponents = async () => {
    await Object.values(links).map(async item => {
      this[item.name] = await document.getElementById(item.name);
      await this.observer.observe(this[item.name]);
    });
  };
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
            <div className="App">
              <Switch>
                <Route
                  exact
                  path={'/'}
                  render={() => (
                    <React.Fragment>
                      {state.webGL && props.width !== 'xs' ? (
                        <Scene width={props.width} />
                      ) : (
                        <Background />
                      )}
                      <Header page={page} width={props.width} />
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
            </div>
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withWidth()(App);
