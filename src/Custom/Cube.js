import React from 'react';
import { withStyles } from '@material-ui/core';

const maxWidth = 1000;
const padding = 8;
const height = {
  normal: 300 - padding,
  sm: (window.innerHeight - 96) / 2 - 96,
  xs: window.innerWidth - 96
};
const width = {
  normal: (maxWidth - 56) / 2 - padding,
  sm: window.innerWidth / 2 - 32,
  xs: window.innerWidth - 48
};
const zValue = {
  xl: (maxWidth - 56) / 2 - padding,
  lg: (maxWidth - 56) / 2 - padding,
  md: (maxWidth - 56) / 2 - padding,
  sm: window.innerWidth / 2 - 32,
  xs: window.innerWidth - 48
};

const styles = ({
  breakpoints,
  transitions: { create, duration, easing }
}) => ({
  card: {
    position: 'absolute',
    width: width.normal,
    height: height.normal,
    [breakpoints.down('sm')]: {
      width: width.sm,
      height: height.sm
    },
    [breakpoints.down('xs')]: {
      width: width.xs,
      height: height.xs
    }
  },
  cube: {
    width: width.normal,
    height: height.normal,
    position: 'relative',
    transformStyle: 'preserve-3d',
    [breakpoints.down('sm')]: {
      width: width.sm,
      height: height.sm
    },
    [breakpoints.down('xs')]: {
      width: width.xs,
      height: height.xs
    }
  },
  container: {
    margin: '0px auto 0px',
    width: width.normal,
    height: height.normal,
    perspective: 500000,
    [breakpoints.down('sm')]: {
      width: width.sm,
      height: height.sm
    },
    [breakpoints.down('xs')]: {
      width: width.xs,
      height: height.xs
    }
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    height: height.normal + 2,
    width: width.normal + 3,
    top: -1,
    left: -1.5,
    borderRadius: 4,
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 1,
    opacity: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    transition: create('opacity', duration.short, easing.easeOut),
    '&:hover': {
      opacity: 1
    },
    [breakpoints.down('sm')]: {
      width: width.sm,
      height: height.sm
    },
    [breakpoints.down('xs')]: {
      height: height.xs,
      width: width.xs
    }
  }
});
class Cube extends React.PureComponent {
  state = {
    in: true
  };

  componentDidUpdate(prevProps) {
    const props = this.props;
    if (prevProps.index !== props.index) {
      this.out();
    }
  }
  componentDidMount() {
    let element = document.getElementById(this.props.idValue);
    if (element !== null) {
      element.addEventListener('transitionend', this.in);
    }
  }
  out = () => {
    requestAnimationFrame(() => this.setState({ in: false }));
  };
  in = () => {
    requestAnimationFrame(() => this.setState({ in: true }));
  };

  render() {
    const props = this.props;
    const state = this.state;
    const z = zValue[props.width] / 2;

    const cubeTransform = [
      'rotateY(0deg) rotateX(0deg)',
      'rotateY(90deg) rotateX(0deg)',
      'rotateY(180deg) rotateX(0deg)',
      'rotateY(270deg) rotateX(0deg)',
      'rotateY(360deg) rotateX(0deg)'
    ];
    const scale = state.in ? 1 : 0.8;
    return (
      <div
        className={props.classes.container}
        style={{
          transform: `scale(${scale})`,
          transition:
            'transform 600ms cubic-bezier(0.4, 0, 0.2, 1) ' + 0 + 'ms'
        }}>
        <div className={props.classes.content}>{props.content}</div>
        <div
          id={props.idValue}
          style={{
            transform: cubeTransform[props.index],
            transition:
              'transform 600ms cubic-bezier(0.4, 0, 0.2, 1) ' +
              props.delay +
              'ms'
          }}
          className={props.classes.cube}>
          {props.children.map((item, i) => {
            const transform = [
              'translateZ(' + z + 'px)',
              'rotateX(180deg) rotateZ(180deg) translateZ(' + z + 'px)',
              'rotateY(-90deg) translateZ(' + z + 'px)',
              'rotateY(90deg) translateZ(' + z + 'px)',
              'rotateX(90deg) translateZ(' + z + 'px)',
              'rotateX(-90deg) translateZ(' + z + 'px)'
            ];
            return (
              <div
                style={{
                  transform: transform[i]
                }}
                className={props.classes.card}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Cube);
