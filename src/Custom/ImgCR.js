import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { toRenderProps, withState } from 'recompose';
const State = toRenderProps(withState('loaded', 'onLoad', false));

const styles = ({transitions: {create, duration, easing}}) => ({
  loading: {
    opacity: 0,
    filterBrightness: 0,
    filterSaturate: 20
  },
  loaded: {
    opacity: 1,
    filterBrightness: 100,
    filterSaturate: 100,
    transition: create(['filter-saturate','filter-brightness', 'opacity'], duration.enteringScreen, easing.easeIn)
  },
  root: {
    backgroundColor: 'white',
    paddingTop: `calc(1 / ${16 / 9} * 100%)`,
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover'
  }
});
const ImgCR = props => {
  return (
    <State>
      {({ loaded, onLoad }) => (
        <div style={props.rootStyle} className={classnames(props.classes.root,{
          [props.rootClassName]: Boolean(props.rootClassName)
        })}>
          {props.src && (
            <img
              alt={props.alt}
              src={props.src}
              style={props.style}
              onLoad={() => onLoad(true)}
              className={classnames({
                [props.classes.image]: true,
                [props.classes.loading]: !loaded,
                [props.classes.loaded]: loaded,
                [props.className]: Boolean(props.className)
              })}
            />
          )}
        </div>
      )}
    </State>
  );
};

ImgCR.propTypes = {
  src: PropTypes.string.isRequired
};
export default withStyles(styles)(ImgCR);
