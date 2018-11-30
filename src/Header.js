import React from 'react';
import $ from 'jquery';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  Toolbar,
  withStyles
} from '@material-ui/core';
import Snack from './Custom/Snack';
import Links from './Components/Links';
import { withRouter } from 'react-router-dom';
import LinkButton from './Custom/LinkButton';
import { links } from './Constants';
import Logo from './logo';

const styles = ({
  breakpoints,
  palette,
  shadows,
  transitions: { create, duration, easing },
  zIndex
}) => ({

 
  header: {
    [breakpoints.up('md')]: {
      backgroundColor: 'transparent',
      boxShadow: shadows[0],
    }
  },
  nav: {
    zIndex: zIndex.appBar,
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0
  },
  skipLink: {
    position: 'absolute',
    top: -40,
    left: 0,
    color: 'white',
    backgroundColor: palette.primary.main,
    padding: 8,
    zIndex: 100,
    '&:focus': {
      top: 0,
    }
  },
  toolbar: {
    justifyContent: 'flex-end'
  }
});
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Profile',
      show: false
    };
  }

  componentDidMount() {
    Object.values(links).map(async item => {
      this[item.name] = await document.getElementById(item.name);
    });
  
  }
  componentDidUpdate(prevProps) {
    const props = this.props;
    if (prevProps.page !== props.page) {
      switch (true) {
        case props.page.profile:
          this.setState({ selected: links.profile.name });
          break;
        case props.page.resume:
          this.setState({ selected: links.resume.name });
          break;
        case props.page.portfolio:
          this.setState({ selected: links.portfolio.name });
          break;
        case props.page.music:
          this.setState({ selected: links.music.name });
          break;
        default:
          return null;
      }
    }
  }
  openSnack = message => {
    this.setState({ show: true, message });
  };
  closeSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ show: false });
  };
  handleScroll = item => {
    const isSmall = this.props.width === 'xs' || this.props.width === 'sm';
    const element = this[item.name];
    if (element !== null) {
      requestAnimationFrame(() => element.scrollIntoView({
        behavior: 'smooth',
        block: isSmall ? 'start' : 'center'
      }));
      this.setState({ selected: item.name });
    }
  };
  Links = () => {
    const props = this.props;
    const state = this.state;
    const { primary, secondary } = props.theme.palette;
    const colors = [
      primary.dark,
      primary.main,
      // primary.light,
      // secondary.light,
      secondary.main,
      secondary.dark
    ];
    return (
      <React.Fragment>
        {Object.values(links).map((item, i) => (
          <LinkButton
            onClick={() => this.handleScroll(item)}
            color={colors[i]}
            key={item.url}
            selected={state.selected === item.name}>
            <item.icon />
            {item.name}
          </LinkButton>
        ))}
      </React.Fragment>
    );
  };
  Nav = () => {
    const props = this.props;
    const state = this.state;
    const { primary, secondary } = props.theme.palette;
    const colors = [
      primary.dark,
      primary.main,
      // primary.light,
      // secondary.light,
      secondary.main,
      secondary.dark
    ];
    return (
      <React.Fragment>
        <BottomNavigation showLabels value={state.selected} className={props.classes.nav}>
          {Object.values(links).map((item, i) => (
            <BottomNavigationAction
              onClick={() => this.handleScroll(item)}
              key={i}
              icon={<item.icon style={{color: colors[i]}}/>}
              value={item.name}
              label={item.name}
            />
          ))}
        </BottomNavigation>
      </React.Fragment>
    );
  };

  render() {
    const props = this.props;
    const state = this.state;
    const isMobile = props.width === 'xs';
    return (
      <React.Fragment>
          <Snack
          onClose={this.closeSnack}
          open={state.show}
          message={state.message}
        />
      <AppBar 
      color={'default'} 
      className={props.classes.header}>
        <Toolbar
          className={props.classes.toolbar}
          id={'appBar'}
          variant={'dense'}>
          <Logo className={props.classes.logo} />
          <a className={props.classes.skipLink} href={"#mainContent"}>Skip to main content</a>
          <Hidden smDown>
            <this.Links />
          </Hidden>
          <Links isMobile={isMobile} handleOpen={this.openSnack} />             
        </Toolbar>
        <Hidden mdUp>
          <this.Nav />
        </Hidden>
        {props.children}
      </AppBar>
      </React.Fragment>
    );
  }
}
export default withRouter(withStyles(styles, { withTheme: true })(Header));
