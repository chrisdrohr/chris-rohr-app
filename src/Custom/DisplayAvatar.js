import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { toRenderProps, withState } from 'recompose';
const State = toRenderProps(withState('loaded', 'onLoad', false));

const styles = ({
  breakpoints,
  palette,
  shadows,
  spacing,
  transitions: { create, duration, easing }
}) => ({
  loading: {
    opacity: 0,
    filterBrightness: 0,
    filterSaturate: 20
  },
  loaded: {
    opacity: 1,
    filterBrightness: 100,
    filterSaturate: 100,
    transition: create(
      ['filter-saturate', 'filter-brightness', 'opacity'],
      duration.enteringScreen,
      easing.easeIn
    )
  },
  root: {
    display: 'flex',
    margin: '16px auto 32px auto',
    [breakpoints.down('xs')]: {
      margin: '0px auto 16px auto'
    }
  },
  layer2: {
    display: 'flex',
    alignItems: 'center',
    width: 290,
    height: 290,
    borderColor: palette.secondary.light,
    borderWidth: 2,
    borderRadius: '50%',
    borderStyle: 'solid',
    margin: 'auto',
    [breakpoints.down('xs')]: {
      borderWidth: 1,
      width: 150,
      height: 150
    }
  },
  layer1: {
    boxShadow: shadows[2],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 270,
    height: 270,
    borderColor: palette.primary.dark,
    borderStyle: 'solid',
    borderWidth: 8,
    borderRadius: '50%',
    margin: 'auto',
    [breakpoints.down('xs')]: {
      width: 130,
      height: 130
    }
  },
  image: {
    marginTop: spacing.unit / 2,
    height: 250,
    width: 250,
    boxShadow: shadows[4],
    borderRadius: '50%',
    backgroundColor: 'transparent',
    borderColor: palette.primary.light,
    borderStyle: 'solid',
    borderWidth: 8,
    margin: 'auto',
    objectFit: 'cover',
    [breakpoints.down('xs')]: {
      height: 115,
      width: 115
    }
  }
});
const DisplayAvatar = props => {
  return (
    <State>
      {({ loaded, onLoad }) => (
        <div className={props.classes.root}>
          <div className={props.classes.layer2}>
            <div className={props.classes.layer1}>
              {props.src && (
                <picture>
                  <source type="image/webp" srcSet={props.srcWebP} />
                  <img
                    alt={props.alt}
                    onLoad={() => onLoad(true)}
                    className={classnames({
                      [props.classes.image]: true,
                      [props.classes.loading]: !loaded,
                      [props.classes.loaded]: loaded,
                      [props.className]: Boolean(props.className)
                    })}
                    data-src={props.src}
                  />
                </picture>
              )}
            </div>
          </div>
        </div>
      )}
    </State>
  );
};

DisplayAvatar.propTypes = {
  src: PropTypes.string.isRequired
};
export default withStyles(styles)(DisplayAvatar);
