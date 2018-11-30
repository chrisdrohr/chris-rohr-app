import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { toRenderProps, withState } from 'recompose';
const State = toRenderProps(withState('loaded', 'onLoad', false));
const styles = ({ palette, transitions: { create, duration, easing } }) => ({
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    flexDirection: 'column',
    position: 'relative',
    opacity: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    transition: create('opacity', duration.short, easing.easeOut),
    '&:hover': {
      opacity: 1
    }
  },
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
    backgroundColor: 'white',
    // paddingTop: `calc(1 / ${16 / 9} * 100%)`,
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'contain'
    //  padding: 16,
  }
});
class MediaCR extends React.PureComponent {
  state = {
    change: false,
    src: ''
  };
  // componentDidUpdate(prevProps) {
  //   const props = this.props;
  //   if (prevProps.src !== props.src) {
  //     this.handleChange();
  //   }
  // }
  // handleChange = () => {
  //   const props = this.props;
  //   this.setState({ change: true }, () =>
  //     setTimeout(() => this.setState({ change: false, src: props.src }), 500)
  //   );
  // };
  render() {
    const props = this.props;
    const state = this.state;
    return (
      <State>
        {({ loaded, onLoad }) => (
          <React.Fragment>
            <div style={props.rootStyle} className={props.classes.root}>
              {props.src && (
                <picture>
                  <source type="image/webp" srcSet={props.srcWebP} />
                  <img
                    alt={props.alt}
                    src={props.src}
                    style={props.style}
                    onLoad={() => onLoad(true)}
              
                    className={classnames({
                      [props.classes.image]: true,
                      [props.classes.loading]: !loaded || state.change,
                      [props.classes.loaded]: loaded && !state.change,
                      [props.className]: Boolean(props.className)
                    })}
                  />
                </picture>
              )}
            </div>

            <div className={props.classes.content}>{props.children}</div>
          </React.Fragment>
        )}
      </State>
    );
  }
}

MediaCR.propTypes = {
  src: PropTypes.string.isRequired
};
export default withStyles(styles)(MediaCR);
