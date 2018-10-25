import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withWidth } from "@material-ui/core";
import { profile } from "./Constants";
import * as Core from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import { ListItem } from "@material-ui/core";
import SkillMeter from "./SkillMeter";
import { LinkedIn } from "./SVG";
import { Spring } from "react-spring";

const styles = ({
  palette,
  shadows,
  spacing,
  transitions: { create, easing, duration }
}) => ({
  chip: {
    margin: spacing.unit,
    color: palette.common.white,
    boxShadow: shadows[4],
    transition: create(
      ["transform", "box-shadow"],
      duration.short,
      easing.easeOut
    ),
    "&:hover": {
      boxShadow: shadows[15],
      transform: "scale(1.2)"
    }
  },
  container: {
    maxWidth: 800,
    paddingTop: "5vh",
    margin: "auto"
  },
  headerContainer: {
    minHeight: "60vh"
  }
});
const Subheader = props => (
  <Core.ListSubheader style={{ color: "white" }}>
    {props.children}
  </Core.ListSubheader>
);
const Container = props => (
  <Core.CardContent onScroll={props.onScroll} id={props.id}>
    {props.children}
  </Core.CardContent>
);
class Profile extends Component {
  isScrolledIntoView = el => {
    if (el !== null) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      // Only completely visible elements return true:
      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      // Partially visible elements return true:
      //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      console.log(isVisible);
      return isVisible;
    } else {
      return null;
    }
  };

  Header = () => {
    const props = this.props;
    return (
      <div className={props.classes.headerContainer}>
        <Core.Avatar src={profile.photoURL} />
        <Spring
          config={{ tension: 280, friction: 120 }}
          from={{ value: 0, x: -1 }}
          to={{ value: 100, x: 1 }}
        >
          {({ value, x }) => (
            <svg viewBox={"0 0 100 40"}>
              <defs>
                <linearGradient id="headerGradient" x1={0} x2={x} y1="0" y2="0">
                  <stop
                    offset={value - 100 + "%"}
                    stop-color={props.theme.palette.primary["500"]}
                  />
                  <stop
                    offset={value + "%"}
                    stop-color={props.theme.palette.secondary["500"]}
                  />
                </linearGradient>
                <filter filterUnits="userSpaceOnUse" id="skillShadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation=".5" />
                  <feOffset dx="0" dy="1" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <text
                filter={"url(#skillShadow)"}
                fill={"url(#headerGradient)"}
                fontSize={20}
                x={4}
                y={38}
              >
                {profile.name}
              </text>
            </svg>
          )}
        </Spring>

        <div
          style={{ display: "flex", margin: "auto", justifyContent: "center" }}
        >
          <Core.Typography
            style={{ color: "white", display: "flex", padding: 5 }}
            variant={"subtitle1"}
          >
            <Icon.Work style={{ marginRight: 5 }} color={"secondary"} /> Web
            Developer
          </Core.Typography>
          <Core.Typography
            style={{ color: "white", display: "flex", padding: 5 }}
            variant={"subtitle1"}
          >
            <Icon.LocationOn style={{ marginRight: 5 }} color={"secondary"} />
            {profile.location}
          </Core.Typography>
        </div>
        <Core.CardActions
          style={{ display: "flex", margin: "auto", justifyContent: "center" }}
        >
          <Core.Button
            color={"primary"}
            style={{ color: "white", display: "flex", padding: 5 }}
            variant={"outlined"}
          >
            <LinkedIn
              style={{ marginRight: 5 }}
              fill={props.theme.palette.primary.main}
            />
            Linked In
          </Core.Button>
          <Core.Button
            color={"primary"}
            style={{ color: "white", display: "flex", padding: 5 }}
            variant={"outlined"}
          >
            <Icon.Email style={{ marginRight: 5 }} color={"primary"} />
            Email
          </Core.Button>
        </Core.CardActions>
      </div>
    );
  };

  Summary = () => {
    return (
      <Container>
        <Subheader>Summary</Subheader>
        <Core.Typography variant={"subtitle1"} style={{ color: "white" }}>
          {profile.summary}
        </Core.Typography>
      </Container>
    );
  };
  Skills = () => {
    const el = document.getElementById("skills");
    console.log(el);
    return (
      <div id={"skills"} onScroll={this.isScrolledIntoView(el)}>
        <Container>
          <Core.List subheader={<Subheader>Skills</Subheader>}>
            {profile.languagesAndFrameworks.map(skill => {
              return (
                <ListItem
                  style={{
                    display: "list-item",
                    paddingTop: 0,
                    paddingBottom: 0
                  }}
                >
                  <Spring from={{ value: 0 }} to={{ value: skill.value }}>
                    {props => (
                      <SkillMeter title={skill.title} value={props.value} />
                    )}
                  </Spring>
                </ListItem>
              );
            })}
          </Core.List>
        </Container>
      </div>
    );
  };
  Technical = () => {
    const props = this.props;
    return (
      <Container>
        <Subheader>Technical</Subheader>
        {profile.technical.map(label => (
          <Core.Chip
            className={props.classes.chip}
            color={"primary"}
            label={label}
          />
        ))}
      </Container>
    );
  };
  Apis = () => {
    const props = this.props;
    return (
      <Container>
        <Subheader>API's</Subheader>
        {profile.apis.map(label => (
          <Core.Chip
            className={props.classes.chip}
            color={"secondary"}
            label={label}
          />
        ))}
      </Container>
    );
  };
  ProjectManagement = () => {
    const props = this.props;
    return (
      <Container>
        <Subheader>Project Management</Subheader>
        {profile.projectManagement.map(label => (
          <Core.Chip
            className={props.classes.chip}
            color={"primary"}
            label={label}
          />
        ))}
      </Container>
    );
  };
  AdditionalSkills = () => {
    const props = this.props;
    return (
      <Container>
        <Subheader>Additional Skills</Subheader>
        {profile.additional.map(label => (
          <Core.Chip
            className={props.classes.chip}
            color={"secondary"}
            label={label}
          />
        ))}
      </Container>
    );
  };

  render() {
    const props = this.props;
    return (
      <div className={props.classes.container}>
        <this.Header />
        <this.Summary />
        <this.Skills />
        <this.Technical />
        <this.Apis />
        <this.ProjectManagement />
        <this.AdditionalSkills />
      </div>
    );
  }
}
export default withWidth()(withStyles(styles, { withTheme: true })(Profile));
