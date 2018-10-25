import React from "react";
import { withStyles } from "@material-ui/core";

const styles = ({ transitions }) => ({
  meter: {
    transition: transitions.create(
      "width",
      transitions.duration.short,
      transitions.easing.easeIn
    )
  }
});
class SkillMeter extends React.Component {
  render() {
    const {
      classes,
      theme: {
        palette: { primary, secondary }
      },
      title,
      value
    } = this.props;
    return (
      <svg viewBox={"0 0 110 10"}>
        <defs>
          <linearGradient id="skillGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stop-color={primary["A200"]} />
            <stop offset={value + "%"} stop-color={secondary["A200"]} />
          </linearGradient>
          <filter filterUnits="userSpaceOnUse" id="skillShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
            <feOffset dx="0" dy="1" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          className={classes.meter}
          filter={"url(#skillShadow)"}
          width={value || 0}
          height={5}
          fill={"url(#skillGradient)"}
          x={1}
          y={2}
          rx={1}
          ry={1}
        />
        <text fontSize={3} x={2} y={6} fill={"white"}>
          {title}
        </text>
        <text fontSize={3} x={value - 6} y={6} fill={"white"}>
          {value}%
        </text>
      </svg>
    );
  }
}
export default withStyles(styles, { withTheme: true })(SkillMeter);
