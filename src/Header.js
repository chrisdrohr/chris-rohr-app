import React from 'react';
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
import { PageConsumer } from './Context';
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
      boxShadow: shadows[0]
    }
  },
  icon: {
    borderRadius: '50%',
    borderWidth: 1,
    borderStyle: 'solid',
    willChange: 'border-color',
    transition: create('border-color', duration.enteringScreen, easing.easeIn)
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
      top: 0
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
      show: false
    };
  }

  componentDidMount() {
    Object.values(links).map(async item => {
      this[item.name] = await document.getElementById(item.name);
    });
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
      requestAnimationFrame(() =>
        element.scrollIntoView({
          behavior: 'smooth',
          block: isSmall ? 'start' : 'center'
        })
      );
    }
  };
  Links = ({ page }) => {
    const props = this.props;
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
            selected={page === item.name}>
            <item.icon />
            {item.name}
          </LinkButton>
        ))}
      </React.Fragment>
    );
  };
  Nav = ({ page }) => {
    const props = this.props;
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
        <BottomNavigation showLabels className={props.classes.nav}>
          {Object.values(links).map((item, i) => {
            const selected = page === item.name;
            return (
              <BottomNavigationAction
                onClick={() => this.handleScroll(item)}
                key={i}
                icon={
                  <item.icon
                    className={props.classes.icon}
                    style={{
                      borderColor: selected ? 'white' : 'transparent',
                      color: colors[i]
                    }}
                  />
                }
                value={item.name}
                label={item.name}
              />
            );
          })}
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
        <AppBar color={'default'} className={props.classes.header}>
          <PageConsumer>
            {page => (
              <React.Fragment>
                <Toolbar
                  className={props.classes.toolbar}
                  id={'appBar'}
                  variant={'dense'}>
                  <Logo className={props.classes.logo} />
                  <a className={props.classes.skipLink} href={'#mainContent'}>
                    Skip to main content
                  </a>
                  <Hidden smDown>
                    <this.Links page={page} />
                  </Hidden>
                  <Links isMobile={isMobile} handleOpen={this.openSnack} />
                </Toolbar>
                <Hidden mdUp>
                  <this.Nav page={page} />
                </Hidden>
              </React.Fragment>
            )}
          </PageConsumer>
          {props.children}
        </AppBar>
      </React.Fragment>
    );
  }
}
export default withRouter(withStyles(styles, { withTheme: true })(Header));
