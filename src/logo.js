import React from "react";
import { Trail, animated } from "react-spring";
import { withStyles } from "@material-ui/core";
const styles = ({breakpoints}) => ({
    logo: {
      [breakpoints.down('xl')]: {
        width: 'calc(100vw - 512px)'
      },
      [breakpoints.down('lg')]: {
        width: 'calc(100vw - 256px)'
      },
      [breakpoints.down('md')]: {
        width: 'calc(100vw - 128px)'
      },
      [breakpoints.down('sm')]: {
        width: 'calc(100vw - 64px)'
      },
        [breakpoints.down('xs')]: {
          width: 'calc(100vw - 32px)'
        },
    }
});
const Logo = props => {
    const letters = [
      {
        fill: "url(#d)",
        d:
          "M78.757 78.449c-16.143 0-29.385 6.32-39.725 18.961-10.341 12.623-15.511 28.168-15.511 46.638s5.883 33.997 17.65 46.583c11.783 12.586 25.86 18.88 42.23 18.88 5.964 0 12.147-.702 18.55-2.105 6.402-1.42 12.44-3.98 18.112-7.677l-4.57-11.72c-10.066 4.735-20.763 7.103-32.092 7.103-12.594 0-23.396-5-32.408-15-8.995-10-13.493-22.148-13.493-36.447 0-14.298 3.85-26.338 11.548-36.119 7.699-9.8 17.602-14.699 29.71-14.699 10.648 0 22.771 2.295 36.37 6.885l3.84-13.305c-14.538-5.319-27.942-7.978-40.21-7.978z"
      },
      {
        fill: "url(#e)",
        d:
          "M139.276 91.563v115.925h13.104v-55.052h61.144v55.052h13.08V91.563h-13.08v46.993H152.38V91.563z"
      },
      {
        fill: "url(#f)",
        d:
          "M280.254 104.596c6.775 0 12.156 1.72 16.143 5.163 4.003 3.425 6.005 8.497 6.005 15.218 0 6.703-1.961 12.605-5.883 17.705-3.923 5.082-7.35 7.622-10.284 7.622-6.11 0-11.743-.2-16.897-.6v-44.699c3.387-.273 7.026-.41 10.916-.41zm.9-13.716c-6.046 0-14.353.483-24.92 1.448v115.16h13.104v-44.424c5.624.4 11.978.6 19.06.6 11.103 17.286 18.461 28.115 22.076 32.486 3.63 4.353 7.382 7.504 11.256 9.453 3.874 1.931 9.83 2.97 17.87 3.115l.34-11.83c-7.845-1.075-14.328-4.59-19.45-10.546-2.707-3.388-9.32-12.924-19.838-28.606 2.852-2.313 6.11-6.503 9.773-12.568 3.68-6.065 5.519-12.76 5.519-20.081 0-10.965-3.323-19.408-9.968-25.327-6.645-5.92-14.92-8.88-24.822-8.88z"
      },
      { fill: "url(#g)", d: "M347.052 91.563v115.925h13.104V91.563z" },
      {
        fill: "url(#h)",
        d:
          "M413.622 89.541c-8.98 0-16.167 2.432-21.565 7.295-5.397 4.863-8.095 11.566-8.095 20.109 0 8.524 2.844 15.983 8.533 22.376 2.788 3.024 5.21 5.437 7.27 7.24 2.058 1.785 5.575 4.618 10.55 8.497 4.976 3.88 8.899 7.423 11.768 10.628 3.662 4.026 5.494 8.343 5.494 12.95 0 5.338-1.775 9.509-5.324 12.514-3.55 2.987-8.777 4.48-15.681 4.48-6.889 0-14.304-3.023-22.246-9.07l-7.026 11.448c8.785 7.668 18.485 11.502 29.101 11.502 10.617 0 19.028-2.677 25.236-8.032 6.224-5.355 9.336-13.242 9.336-23.66 0-8.143-2.747-15.3-8.242-21.475-2.788-3.006-5.162-5.374-7.123-7.104-1.961-1.749-5.438-4.535-10.43-8.36-4.976-3.844-8.995-7.423-12.059-10.738-3.841-4.134-5.762-8.725-5.762-13.77 0-4.116 1.346-7.331 4.036-9.644 2.69-2.314 6.378-3.47 11.062-3.47 7.602 0 15.227 2.076 22.877 6.23l5.106-12.542c-8.898-4.936-17.837-7.404-26.816-7.404z"
      },
      {
        fill: "url(#i)",
        d:
          "M543.755 94.022c7.764 0 13.866 1.913 18.307 5.738 4.44 3.825 6.661 9.517 6.661 17.076 0 7.54-2.212 14.198-6.637 19.972-4.408 5.755-8.33 8.633-11.767 8.633-6.807 0-13.185-.21-19.133-.628V94.459c3.97-.291 8.16-.437 12.57-.437zm116.57 9.727c11.102 0 20.291 4.398 27.569 13.196 7.293 8.797 10.94 19.653 10.94 32.567 0 12.896-3.647 23.724-10.94 32.485-7.278 8.743-16.467 13.115-27.57 13.115-11.102 0-20.316-4.372-27.642-13.115-7.326-8.76-10.99-19.59-10.99-32.485 0-12.896 3.664-23.742 10.99-32.54 7.342-8.816 16.556-13.223 27.642-13.223zm-115.67-23.961c-6.451 0-15.406.473-26.865 1.42v126.28h13.396V158.42c5.802.492 13.104.738 21.905.738 13.096 20.2 21.451 32.421 25.065 36.665 3.615 4.244 7.505 7.45 11.67 9.617 4.166 2.15 10.527 3.297 19.085 3.443l.34-11.994c-8.817-1.184-15.989-5.082-21.516-11.694-1.523-1.949-4.992-6.84-10.405-14.672-5.397-7.85-9.304-13.651-11.718-17.403 3.274-2.587 6.945-7.25 11.013-13.989 4.068-6.74 6.102-14.107 6.102-22.103 0-11.858-3.622-21.029-10.867-27.513-7.245-6.484-16.314-9.726-27.205-9.726zm115.62 10.081c-14.716 0-27.058 5.774-37.026 17.322-9.952 11.548-14.928 25.664-14.928 42.348 0 16.667 4.976 30.774 14.928 42.322 9.968 11.53 22.31 17.294 37.027 17.294 14.716 0 27.05-5.765 37.002-17.294 9.968-11.548 14.952-25.655 14.952-42.322 0-16.684-4.984-30.8-14.952-42.348-9.952-11.548-22.286-17.322-37.002-17.322z",
      },
      {
        fill: "url(#j)",
        d:
          "M735.866 91.563v115.925h13.104v-55.052h61.144v55.052h13.08V91.563h-13.08v46.993H748.97V91.563z"
      },
      {
        fill: "url(#k)",
        d:
          "M876.844 104.596c6.775 0 12.156 1.72 16.143 5.163 4.004 3.425 6.005 8.497 6.005 15.218 0 6.703-1.96 12.605-5.883 17.705-3.923 5.082-7.35 7.622-10.284 7.622-6.11 0-11.743-.2-16.897-.6v-44.699c3.388-.273 7.026-.41 10.916-.41zm.9-13.716c-6.046 0-14.352.483-24.92 1.448v115.16h13.104v-44.424c5.624.4 11.978.6 19.06.6 11.103 17.286 18.461 28.115 22.076 32.486 3.63 4.353 7.382 7.504 11.256 9.453 3.874 1.931 9.83 2.97 17.87 3.115l.34-11.83c-7.845-1.075-14.328-4.59-19.45-10.546-2.707-3.388-9.32-12.924-19.838-28.606 2.852-2.313 6.11-6.503 9.773-12.568 3.68-6.065 5.519-12.76 5.519-20.081 0-10.965-3.323-19.408-9.968-25.327-6.645-5.92-14.92-8.88-24.822-8.88z"
      }
    ];
    return (
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 960 288"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit={10}
        className={props.classes.logo}
      >
        <clipPath id="a">
          <path d="M0 0h960v600H0V0z" />
        </clipPath>
        <g clipPath="url(#a)">
          <path
            fill="#000"
            fillOpacity={0}
            d="M0 0h960v600H0z"
            fillRule="evenodd"
          />
          <g filter="url(#b)">
            <use xlinkHref="#c" transform="translate(0 5)" />
          </g>
          <defs>
            <filter id="b" filterUnits="userSpaceOnUse">
              <feGaussianBlur in="SourceAlpha" stdDeviation={2} result="blur" />
              <feComponentTransfer in="blur" colorInterpolationFilters="sRGB">
                <feFuncR type="linear" slope={0} />
                <feFuncG type="linear" slope={0} />
                <feFuncB type="linear" slope={0} />
                <feFuncA type="linear" slope={0.5} />
              </feComponentTransfer>
            </filter>
          </defs>
          <g id="c">
            <defs>
              <linearGradient
                id="d"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(30.19261)"
                spreadMethod="pad"
                x1={0.906}
                y1={12.02}
                x2={31.099}
                y2={12.02}
              >
                <stop offset={0} stopColor="#03a9f4" />
                <stop offset={1} stopColor="#f50057" />
              </linearGradient>
              <linearGradient
                id="e"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(30.19261)"
                spreadMethod="pad"
                x1={0.906}
                y1={12.02}
                x2={31.099}
                y2={12.02}
              >
                <stop offset={0} stopColor="#03a9f4" />
                <stop offset={1} stopColor="#f50057" />
              </linearGradient>
              <linearGradient
                id="f"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(30.19261)"
                spreadMethod="pad"
                x1={0.906}
                y1={12.02}
                x2={31.099}
                y2={12.02}
              >
                <stop offset={0} stopColor="#03a9f4" />
                <stop offset={1} stopColor="#f50057" />
              </linearGradient>
              <linearGradient
                id="g"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(30.19261)"
                spreadMethod="pad"
                x1={0.906}
                y1={12.02}
                x2={31.099}
                y2={12.02}
              >
                <stop offset={0} stopColor="#03a9f4" />
                <stop offset={1} stopColor="#f50057" />
              </linearGradient>
              <linearGradient
                id="h"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(30.19261)"
                spreadMethod="pad"
                x1={0.906}
                y1={12.02}
                x2={31.099}
                y2={12.02}
              >
                <stop offset={0} stopColor="#03a9f4" />
                <stop offset={1} stopColor="#f50057" />
              </linearGradient>
              <linearGradient
                id="i"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(30.19261)"
                spreadMethod="pad"
                x1={0.906}
                y1={12.02}
                x2={31.099}
                y2={12.02}
              >
                <stop offset={0} stopColor="#03a9f4" />
                <stop offset={1} stopColor="#f50057" />
              </linearGradient>
              <linearGradient
                id="j"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(30.19261)"
                spreadMethod="pad"
                x1={0.906}
                y1={12.02}
                x2={31.099}
                y2={12.02}
              >
                <stop offset={0} stopColor="#03a9f4" />
                <stop offset={1} stopColor="#f50057" />
              </linearGradient>
              <linearGradient
                id="k"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(30.19261)"
                spreadMethod="pad"
                x1={0.906}
                y1={12.02}
                x2={31.099}
                y2={12.02}
              >
                <stop offset={0} stopColor="#03a9f4" />
                <stop offset={1} stopColor="#f50057" />
              </linearGradient>
            </defs>
            {props.show && <Trail
              native
              items={letters}
              from={{ opacity: 0, x: -100 }}
              to={{ opacity: true ? 1 : 0.25, x: false ? 0 : 100 }}>
              {letter => ({ x, opacity }) => (
                <animated.path
                  key={letter.fill}
                  fill={letter.fill}
                  d={letter.d}
                  style={{
                    opacity: opacity
                  }}
                />
              )}
            </Trail>}
          </g>
        </g>
      </svg>
    );
}

export default withStyles(styles)(Logo);
