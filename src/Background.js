import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
  breakpoints,
  palette,
  transitions: { create, easing, duration }
}) => ({
  container: {
    height: '100vh',
    // maxHeight: window.innerHeight,
    width: '100vw',
    backgroundColor: '#112',
    position: 'fixed',
    zIndex: -1,
    // opacity: 0,
    transition: create('opacity', duration.complex, easing.easeIn)
  },
  city: {
    transform: 'translate(50%, 40%)'
  },
  lights: {
    fill: palette.secondary.main
  },
  star: {
    transition: create('transform', 1000, easing.easeIn),
  },
  svg: {
    // position: "fixed",
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

const times = num => func => {
  if (num > 0) {
    func();
    times(num - 1)(func);
  }
};

const Sky = props => {
  const {
    classes,
    theme: {
      breakpoints: { values },
      palette: {
        common: { white }
      }
    },
    width
  } = props;
  const isMobile = width === 'xs';
  const pixels = isMobile ? 400 : values[width];
  let i = 0;
  let qty = [];
  for (i; i < pixels; i++) {
    qty.push(i);
  }
  return (
    <g>
      <g>
        {qty.map(i => {
          const opacity = Math.random();
          return (
            <circle
              key={i}
              // style={{transform: props.in ? 'scale(1)' : 'scale(0)'}}
              className={classes.star}
              cx={Math.random() * window.innerWidth}
              cy={Math.random() * window.innerHeight}
              fill={'#eee'}
              opacity={opacity}
              r={Math.random() + 1}
            />
          );
        })}
      </g>
      <svg>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            id="blur"
            x="0"
            y="0"
            width="200%"
            height="200%">
            <feGaussianBlur
              result="offOut"
              in="SourceGraphic"
              stdDeviation="5"
            />
          </filter>

          <filter
            filterUnits="userSpaceOnUse"
            id="blur2"
            x="0"
            y="0"
            width="200%"
            height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>

          <filter filterUnits="userSpaceOnUse" id="shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
            <feOffset dx="2" dy="4" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter
            id={'moonGlow'}
            overflow={'visible'}
            height="300%"
            width="300%"
            x="-60%"
            y="-60%">
            <feMorphology
              operator="dilate"
              radius="2"
              in="SourceAlpha"
              result="thicken"
            />
            <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
            <feFlood floodColor={white} result="glowColor" />
            <feComposite
              in="glowColor"
              in2="blurred"
              operator="in"
              result="softGlow_colored"
            />
            <feMerge>
              <feMergeNode in="softGlow_colored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* <g>
          {['shadow', 'moonGlow'].map((filter, i) => (
            <circle
              key={i}
              // cx={x+"%"}
              // cy={y+"%"}
              cx={'50%'}
              cy={'40%'}
              r={isMobile ? '12%' : '8%'}
              fill={'white'}
              filter={'url(#' + filter + ')'}
            />
          ))}
          {[
            {
              cx: 'calc(80% - '+ (isMobile ? 40 : 80) +'px)',
              cy: 'calc(20% - '+ (isMobile ? 10 : 30) +'px)',
              r: isMobile ? '1%' : '0.5%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
          
            {
              cx: 'calc(80% - '+ (isMobile ? 25 : 35) +'px)',
              cy: 'calc(20% - '+ (isMobile ? 35 : 50) +'px)',
              r: isMobile ? '3%' : '2%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
        
            {
              cx: 'calc(80% - '+ (isMobile ? 2.5 : 5) +'px)',
              cy: 'calc(20% - '+ (isMobile ? 1 : 2) +'px)',
              r: isMobile ? '1.2%' : '0.6%',
              fill: 'rgba(0, 0, 0, 0.05)'
            },
            {
              cx: 'calc(80% + '+ (isMobile ? 50 : 80) +'px)',
              cy: 'calc(20% + 30px)',
              r: isMobile ? '1%' : '0.5%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
            {
              cx: 'calc(80% + 20px)',
              cy: 'calc(20% + 60px)',
              r: isMobile ? '0.6%' : '0.3%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
            {
              cx: 'calc(80% + 25px)',
              cy: 'calc(20% + 23px)',
              r: isMobile ? '0.8%' : '0.4%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
            {
              cx: 'calc(80% + 45px)',
              cy: 'calc(20% + 2px)',
              r: isMobile ? '1.2%' : '0.6%',
              fill: 'rgba(0, 0, 0, 0.05)'
            },
            {
              cx: 'calc(80% - '+ (isMobile ? 50 : 80) +'px)',
              cy: 'calc(20% + 30px)',
              r: isMobile ? '1%' : '0.5%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
            {
              cx: 'calc(80% - 20px)',
              cy: 'calc(20% + '+ (isMobile ? 55 : 65) +'px)',
              r: isMobile ? '1.2%' : '0.8%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
            {
              cx: 'calc(80% - 25px)',
              cy: 'calc(20% + 23px)',
              r: isMobile ? '0.8%' : '0.4%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
           
            {
              cx: 'calc(80% + '+ (isMobile ? 15 : 25) +'px)',
              cy: 'calc(20% - '+ (isMobile ? 55 : 75) +'px)',
              r: isMobile ? '1%' : '1%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
            {
              cx: 'calc(80% + 32px)',
              cy: 'calc(20% - 45px)',
              r: isMobile ? '0.6%' : '0.4%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
            {
              cx: 'calc(80% + '+ (isMobile ? 25 : 65) +'px)',
              cy: 'calc(20% - 32px)',
              r: isMobile ? '0.8%' : '0.6%',
              fill: 'rgba(0, 0, 0, 0.1)'
            },
          ].map((item, i) => (
            <circle
              key={i}
              cx={item.cx}
              cy={item.cy}
              r={item.r}
              fill={item.fill}
              //  filter={"url(#" + filter + ")"}
            />
          ))}
        </g> */}
      </svg>
    </g>
  );
};

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      in: false
    };
  }
  componentDidMount() {
    // setTimeout(() => this.setState({in: true}), 500);

    // const element = document.getElementById('background');
    // if (element !== null) {
    //   element.style.opacity = 1
    // }
  }
  render() {
    const { classes } = this.props;
    return (
      <div id={'background'} className={classes.container}>
        <svg className={classes.svg}>
          <Sky {...this.props} in={this.state.in}/>
        </svg>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Background);
