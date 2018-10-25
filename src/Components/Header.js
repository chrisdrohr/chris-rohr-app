import React from 'react';
import { profile } from '../Constants';
import * as Core from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { scrollIntoView } from '../Functions';
import Logo from '../logo';
const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({
  continueButton: {
    backgroundColor: 'rgba(3, 169, 244, 0.3)',
    color: 'white',
   
    transition: create(['transform'], duration.short, easing.easeInOut),
    transform: 'scale(1)',
    '&:hover': {
      backgroundColor: palette.primary.main,
      transform: 'scale(1.2)'
    }
  },
  continueButtonContainer: {
    position: 'absolute',
    bottom: '15vh',
  },
  headerContainer: {
    maxWidth: 800,
    margin: 'auto',
    paddingBottom: 156,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: window.innerHeight
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
    setTimeout(
      () => requestAnimationFrame(() => this.setState({ show: true })),
      3000
    );
  }
  render() {
    const props = this.props;
    const state = this.state;

    const isMobile = props.width === 'xs';
    return (
      <div id={'header'} className={props.classes.headerContainer}>
        <div>
          <Logo show={state.show} />
          <Core.Fade in={state.show} style={{ transitionDelay: 2000 }}>
            <div
              style={{
                padding: '0 32px',
                margin: 'auto'
              }}>
              <Core.Typography
                align={isMobile ? 'center' : 'left'}
                style={{
                  color: 'white',
                  padding: 5
                }}
                variant={isMobile ? 'h6' : 'h4'}>
                {profile.profession}
              </Core.Typography>

              <Core.Typography
                align={isMobile ? 'center' : 'left'}
                style={{
                  color: 'white',
                  padding: 5
                }}
                variant={isMobile ? 'body1' : 'subtitle1'}>
                {profile.location}
              </Core.Typography>
            </div>
          </Core.Fade>
        </div>
        <Core.Fade in={state.show} style={{ transitionDelay: 2300 }}>
            
    <div className={props.classes.continueButtonContainer}>
          <Core.Button
            className={props.classes.continueButton}
            onClick={() => scrollIntoView('about')}
            variant={'fab'}>
            <Icon.KeyboardArrowDown />
          </Core.Button>
          </div>
          </Core.Fade>
       
      </div>
    );
  }
}
export default Core.withStyles(styles)(Header);
