import Subheader from "../Custom/Subheader";
import * as Core from "@material-ui/core";
import { profile } from "../Constants";
import * as Icon from "@material-ui/icons";
import { LinkedIn } from "../SVG";
import { copyText } from "../Functions";
import Container from "../Custom/Container";
import React from "react";

const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({
  avatar: {
    height: 200,
    width: 200,
    boxShadow: shadows[6],
    borderRadius: "4px 14px",
    marginBottom: 16,
    margin: "auto",
    filter: "grayscale(100%)",
    transition: create("filter", duration.short, easing.easeOut),
    "&:hover": {
      filter: "none"
    },
    [breakpoints.down("xs")]: {
      height: 150,
      width: 100
    }
  },
  aboutButton: {
    width: "100%",
    display: "flex",
    padding: 5
  },
  aboutContainer: {
    minHeight: "50vh"
  },
  linkedInIcon: {
    marginRight: 5,
    fill: palette.primary.main
  }
});
const About = props => {
  const Actions = () => (
    <Core.Grid container spacing={8}>
      {[
        {
          title: profile.resume.info,
          color: "primary",
          component: "a",
          href: profile.resume.url,
          target: "_blank",
          style: { color: "white" },
          variant: "contained",
          icon: <Icon.Description style={{ marginRight: 5 }} />,
          label: profile.resume.title
        },
        {
          title: profile.linkedIn.info,
          color: "primary",
          component: "a",
          href: profile.linkedIn.link,
          target: "_blank",

          variant: "outlined",
          icon: (
            <LinkedIn
              style={{ marginRight: 5 }}
              className={props.classes.linkedInIcon}
            />
          ),
          label: profile.linkedIn.title
        },
        {
          title: profile.email.info,
          color: "primary",
          onClick: async () => {
            await copyText(profile.email.email);
            return props.handleOpen(profile.email.message);
          },
          variant: "outlined",
          icon: <Icon.Email style={{ marginRight: 5 }} color={"primary"} />,
          label: profile.email.title
        }
      ].map((button, i) => (
        <Core.Grid key={i} item sm={4} xs={i === 0 ? 12 : 6}>
          <Core.Tooltip key={button.title} title={button.title}>
            <Core.Button
              className={props.classes.aboutButton}
              onClick={button.onClick}
              color={button.color}
              component={button.component}
              href={button.href}
              target={button.target}
              style={button.style}
              variant={button.variant}
            >
              {button.icon}
              {button.label}
            </Core.Button>
          </Core.Tooltip>
        </Core.Grid>
      ))}
    </Core.Grid>
  );
  return (
    <Container id={"about"} className={props.classes.aboutContainer}>
      <Subheader visible={props.visible}>About</Subheader>
      <Core.Fade in={props.visible}>
        <div>
          <Core.CardHeader
            avatar={
                <Core.Avatar
                  className={props.classes.avatar}
                  src={profile.photoURL}
                />
            }
            disableTypography
            title={
              <Core.Typography align={"left"} paragraph variant={"h6"}>
                {profile.summary[0]}
              </Core.Typography>
            }
            subheader={
              <React.Fragment>
                <Core.Hidden xsDown>
                  <Core.Typography
                    align={"left"}
                    paragraph
                    variant={"subtitle1"}
                  >
                    {profile.summary[1]}
                  </Core.Typography>
                </Core.Hidden>
                <Actions />
              </React.Fragment>
            }
          />
          <Core.Hidden smUp>
            <Core.Typography align={"left"} paragraph variant={"subtitle1"}>
              {profile.summary[1]}
            </Core.Typography>
          </Core.Hidden>
        </div>
      </Core.Fade>
    </Container>
  );
};
export default Core.withStyles(styles)(About);
