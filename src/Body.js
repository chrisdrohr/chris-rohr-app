import React, { Component } from 'react';
import { links } from './Constants';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const height = window.innerHeight;
const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({
  background: {
    position: 'absolute',
    right: 0,
    left: 0
  },

  container: {
    maxWidth: 1000,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height,
    padding: '48px 8px',
    [breakpoints.down('xs')]: {
      paddingBottom: 56
    }
  },

  codeButton: {
    marginLeft: 'auto',
    marginTop: 16,
    [breakpoints.down('xs')]: {}
  },

  topButton: {
    transition: create('transform', duration.short, easing.sharp),
    position: 'fixed',
    bottom: 64,
    right: 32,
    [breakpoints.down('sm')]: {
      bottom: 32,
      right: 16
    }
  },

  enter: {
    opacity: 0,
    zIndex: 1
  },

  enterActive: {
    opacity: 1,
    transition: create('opacity', duration.short, easing.easeIn)
  },

  exit: {
    opacity: 1
  },

  exitActive: {
    opacity: 0.01,
    transition: create('opacity', duration.short, easing.easeIn)
  }
});

class Body extends Component {

  render() {
    const props = this.props;

    return (
      <main id={'mainContent'}>
          {Object.values(links).map(item => (
            <div
              key={item.name}
              id={item.name}
              className={props.classes.container}>
              <item.component visible={props.page[item.name.toLowerCase()]} width={props.width}/>
            </div>
          ))}
      </main>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(Body));
