import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = ({
                    breakpoints,
                    palette,
                    transitions: {create, easing, duration},
                }) => ({
  container: {
    height: '100vh',
    maxHeight: window.innerHeight,
    width: '100vw',
    backgroundColor: "#112",
    position: "absolute",
    zIndex: -1,
    opacity: 0,
    transition: create('opacity', duration.complex, easing.easeIn),
  },
  city: {
    transform: "translate(50%, 40%)"
  },
  lights: {
    fill: palette.secondary.main
  },
    star: {
      // transition: create('opacity', duration.complex, easing.easeIn),
    },
  svg: {
    // position: "fixed",
    width: "100%",
    height: "100%",
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
      breakpoints: {
        values,
      },
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
          className={classes.star}
          cx={Math.random() * window.innerWidth}
          cy={Math.random() * window.innerHeight}
          fill={"#eee"}
          opacity={opacity}
          r={Math.random() + 1}
        />
      )})}
      </g>
        <svg>
          <defs>
            <filter
              filterUnits="userSpaceOnUse"
              id="blur"
              x="0"
              y="0"
              width="200%"
              height="200%"
            >
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
              height="200%"
            >
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
              id={"moonGlow"}
              overflow={'visible'}
              height="300%"
              width="300%"
              x="-60%"
              y="-60%"
            >
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
      <g>
        {["shadow", "moonGlow"].map((filter, i) => (
          <circle
            key={i}
            // cx={x+"%"}
            // cy={y+"%"}
            cx={"80%"}
            cy={"20%"}
            r={isMobile ? "5%" : "8%"}
            fill={"white"}
            filter={"url(#" + filter + ")"}
          />
        ))}
      </g>
        </svg>
    </g>
  );
};
// const Road = props => {
//   const {
//     theme: {
//       palette: {
//         secondary,
//         common: { white }
//       }
//     }
//   } = props;
//   const Traffic = props => (
//     <g>
//       <defs>
//         <filter id="blur" x="0" y="0" width="120%" height="120%">
//           <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
//           <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
//           <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
//         </filter>
//         {[
//           { floodColor: secondary["A100"], id: "glowPink" },
//           { floodColor: white, id: "glowWhite" }
//         ].map((val, i) => (
//           <filter
//             key={i}
//             id={val.id}
//             height="200%"
//             width="200%"
//             x="-15%"
//             y="-15%"
//           >
//             <feMorphology
//               operator="dilate"
//               radius="2"
//               in="SourceAlpha"
//               result="thicken"
//             />
//             <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
//             <feFlood floodColor={val.floodColor} result="glowColor" />
//             <feComposite
//               in="glowColor"
//               in2="blurred"
//               operator="in"
//               result="softGlow_colored"
//             />
//             <feMerge>
//               <feMergeNode in="softGlow_colored" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         ))}
//         <linearGradient id="pink" x1="0" x2="0" y1="0" y2="1">
//           <stop offset="5%" stopColor={secondary["A200"]} />
//           <stop offset="95%" stopColor={secondary["A100"]} />
//         </linearGradient>
//         <linearGradient id="white" x1="0" x2="0" y1="0" y2="1">
//           <stop offset="5%" stopColor={white} />
//           <stop offset="95%" stopColor={white} />
//         </linearGradient>
//       </defs>
//       {[
//         { x: -10, y: 1 },
//         { x: -8, y: 0 },
//         { x: -6, y: 0 },
//         { x: -4, y: 0 },
//         { x: -2, y: 0 },
//         { x: 1, y: 1 },
//         { x: 3, y: 0 },
//         { x: 5, y: 0 },
//         { x: 7, y: 0 },
//         { x: 9, y: 0 }
//       ].map((val, i) => (
//         <svg y={val.y} x={val.x}>
//           <path
//             filter={i < 6 ? "url(#glowPink)" : "url(#glowWhite"}
//             stroke={i < 6 ? "url(#pink)" : "url(#white)"}
//             fill={"transparent"}
//             strokeWidth={2}
//             strokeLinejoin="round"
//             strokeLinecap="butt"
//             d="M506.344 630.544c7.961-19.686 51.532-49.505 47.769-118.118-3.763-68.613-72.52-212.063-70.35-293.56 2.172-81.495 88.01-160.676 83.379-195.416-4.632-34.741-88.445-11.434-111.17-13.027-22.727-1.592-20.99 2.894-25.187 3.473"
//           />
//         </svg>
//       ))}
//     </g>
//   );
//   return (
//     <svg y={"60%"} x={"0%"}>
//       <path
//         id={"road"}
//         stroke={grey[300]}
//         fill={"transparent"}
//         strokeWidth={20}
//         strokeLinejoin="round"
//         strokeLinecap="butt"
//         d="M506.344 630.544c7.961-19.686 51.532-49.505 47.769-118.118-3.763-68.613-72.52-212.063-70.35-293.56 2.172-81.495 88.01-160.676 83.379-195.416-4.632-34.741-88.445-11.434-111.17-13.027-22.727-1.592-20.99 2.894-25.187 3.473"
//       />
//       <path
//         id={"lines"}
//         stroke={grey["A200"]}
//         strokeDasharray={"10,10"}
//         fill={"transparent"}
//         strokeWidth={2}
//         strokeLinejoin="round"
//         strokeLinecap="butt"
//         d="M506.344 630.544c7.961-19.686 51.532-49.505 47.769-118.118-3.763-68.613-72.52-212.063-70.35-293.56 2.172-81.495 88.01-160.676 83.379-195.416-4.632-34.741-88.445-11.434-111.17-13.027-22.727-1.592-20.99 2.894-25.187 3.473"
//       />
//
//       <Traffic />
//     </svg>
//   );
// };
//
// const City = props => {
//   const {
//     classes,
//     theme: {
//       palette: { primary }
//     }
//   } = props;
//   return (
//     <g className={classes.city}>
//       <BuildingA />
//     </g>
//   );
// };
// const CityScape = props => {
//   const { classes } = props;
//   return (
//     <g>
//       <defs>
//         <filter id="blur" x="0" y="0" width="200%" height="200%">
//           <feGaussianBlur result="offOut" in="SourceGraphic" stdDeviation="5" />
//         </filter>
//
//         <filter id="blur2" x="0" y="0" width="200%" height="200%">
//           <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
//           <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
//           <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
//         </filter>
//         <filter id="shadow">
//           <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
//           <feOffset dx="2" dy="4" />
//           <feMerge>
//             <feMergeNode />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//       </defs>
//       <circle
//         // className={classes.lights}
//         cx={1}
//         cy={5}
//         fill={"#eee"}
//         // opacity={Math.random()}
//         r={2}
//       />
//       <rect
//         // fill={"url(#back)"}
//
//         x="0%"
//         y="50%"
//         width="100%"
//         height="30%"
//         rx={0}
//         ry={0}
//       />
//
//       <rect
//         // fill={"url(#front)"}
//         x="0%"
//         y="80%"
//         width="100%"
//         height="70%"
//         rx={0}
//         ry={0}
//       />
//     </g>
//   );
// };
class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
componentDidMount() {
  const element = document.getElementById('background');
  if (element !== null) {
    setTimeout(() => element.style.opacity = 1, 300);
  }
}
  render() {
    const { classes } = this.props;
    return (
      <div id={'background'} className={classes.container}>
        <svg className={classes.svg}>
          <Sky {...this.props}/>
        </svg>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Background);
