import React from "react";
import { withStyles, withWidth } from "@material-ui/core";

const styles = ({ breakpoints, transitions }) => ({
  meter: {
    height: 6,
    transition: transitions.create(
      "width",
      transitions.duration.short,
      transitions.easing.easeIn
    ),
    [breakpoints.down("xs")]: {
      height: 10
    }
  },
  text: {
    fontSize: 4,
    [breakpoints.down("xs")]: {
      fontSize: 6
    }
  }
});
class SkillMeter extends React.Component {
  render() {
    const {
      classes,
      theme: {
        palette: { grey, primary, secondary }
      },
      title,
      width,
      value
    } = this.props;
    const isMobile = width === "xs";
    return (
      <svg viewBox={isMobile ? "0 0 110 15" : "0 0 110 10"}>
        <defs>
          <linearGradient id="skillGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={primary.light} />
            <stop offset="35%" stopColor={primary.main} />
            <stop offset={"65%"} stopColor={secondary.light} />
            <stop offset={value + "%"} stopColor={secondary.main} />
          </linearGradient>
          <filter filterUnits="userSpaceOnUse" id="skillDropShadow">
            <feDropShadow
              dx=".5"
              dy=".5"
              stdDeviation=".5"
              floodColor={grey[500]}
              floodOpacity="1"
            />
          </filter>
        </defs>

        <rect
          className={classes.meter}
          filter={"url(#skillDropShadow)"}
          width={value || 0}
          fill={"url(#skillGradient)"}
          x={1}
          y={2}
          rx={1}
          ry={1}
        />
        <g className={classes.text}>
          <text x={2} y={isMobile ? 10 : 7} fill={"white"}>
            {title}
          </text>
          <text
            x={isMobile ? value - 11 : value - 8}
            y={isMobile ? 10 : 7}
            fill={"white"}
          >
            {value}%
          </text>
        </g>
      </svg>
    );
  }
}
export default withWidth()(withStyles(styles, { withTheme: true })(SkillMeter));
