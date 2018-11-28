import React from 'react';
import $ from 'jquery';
import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  Toolbar,
  withStyles
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import LinkButton from './Custom/LinkButton';
import { links } from './Constants';
import Logo from './logo';

const styles = ({
  breakpoints,
  palette,
  transitions: { create, duration, easing },
  zIndex
}) => ({
  menuButton: {
    transition: create('transform', duration.short, easing.easeInOut),
    position: 'fixed',
    zIndex: zIndex.drawer + 1000,
    color: palette.common.white,
    [breakpoints.up('sm')]: {
      top: 16,
      right: 16
    },
    [breakpoints.down('xs')]: {
      top: 16,
      right: 16
    }
  },
  logo: {
    position: 'fixed',
    top: 16,
    left: 16,
    height: '2.5rem'
  },
  header: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: zIndex.appBar
  },
  nav: {
    zIndex: zIndex.appBar,
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0
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
      this[item.name] = await document.getElementById(item.url);
    });
    $(document).ready(() => this.setState({ show: true }));
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
        <BottomNavigation value={state.selected} className={props.classes.nav}>
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
    return (
      <header className={props.classes.header}>
        <Toolbar
          className={props.classes.toolbar}
          id={'appBar'}
          variant={'dense'}>
          <Logo show={state.show} className={props.classes.logo} />
          <Hidden xsDown>
            <this.Links />
          </Hidden>
        </Toolbar>
        <Hidden smUp>
          <this.Nav />
        </Hidden>
        {props.children}
      </header>
    );
  }
}
export default withRouter(withStyles(styles, { withTheme: true })(Header));
