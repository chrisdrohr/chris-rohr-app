import React from 'react';
import { Card, CardActions, Chip, withStyles } from '@material-ui/core';
import { toRenderProps, withState } from 'recompose';
import classnames from 'classnames';

const State = toRenderProps(withState('selected', 'update', 0));

const styles = ({
  breakpoints,
  transitions: { create, duration, easing }
}) => ({
  card: {
    width: 380,
    height: 450,
    position: 'absolute',
    transformStyle: 'preserve-3d',
    transformOrigin: 'left',
    willChange: 'transform',
    transition: create(['transform'], duration.short, easing.sharp),
    backgroundColor: 'rgba(17, 17, 34, 1)',
    overflowY: 'scroll',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    [breakpoints.down('sm')]: {
      width: 'calc(100vw - 64px)',
      height: 320
    },
    [breakpoints.down('xs')]: {
      width: 'calc(100vw - 64px)',
      height: 440
    }
  },
  container: {
    perspective: 1000,
    [breakpoints.down('xs')]: {
      perspective: 10000
    }
  }
});

const CardStack = props => {
  const isMobile = props.width === 'xs';
  return (
    <State>
      {({ selected, update }) => {
        return (
          <div
            className={classnames({
              [props.className]: Boolean(props.className),
              [props.classes.container]: true
            })}>
            <CardActions>
              {props.titles.map((title, i) => {
                return (
                  <Chip
                    key={i}
                    clickable={true}
                    color={selected === i ? 'secondary' : 'default'}
                    label={title}
                    onClick={() => update(i)}
                  />
                );
              })}
            </CardActions>
            {props.children.map((component, i) => {
              const isSelected = selected === i;
              const xPixels = isMobile ? 0 : 0;
              const yPixels = isMobile ? 5 : 5;
              const zPixels = -50;
              const x = i * xPixels;
              const y = i * yPixels;
              const z3d = isSelected ? 0 : i * zPixels;
              const z = isSelected ? props.children.length + 1 : i;
              const translate =
                'translate3d(' + x + 'px, ' + y + 'px, ' + z3d + 'px)';
              return (
                <Card
                  key={i}
                  className={props.classes.card}
                  style={{
                    zIndex: z,
                    transform: translate
                  }}>
                  {component}
                </Card>
              );
            })}
          </div>
        );
      }}
    </State>
  );
};
export default withStyles(styles)(CardStack);
