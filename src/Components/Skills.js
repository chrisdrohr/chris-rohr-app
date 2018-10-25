import React, { Component } from "react";
import Container from "../Custom/Container";
import Subheader from "../Custom/Subheader";
import { profile } from "../Constants";
import * as Core from "@material-ui/core";

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
    overflow: "visible",
    borderRadius: 0,
    margin: 'auto'
  },
  card: {
    width: "100%"
  },
  chip: {
    margin: spacing.unit,
    color: palette.common.white,
    boxShadow: shadows[2],
    willChange: ["transform", "box-shadow"],
    transition: create(
      ["transform", "box-shadow"],
      duration.short,
      easing.easeOut
    ),
    "&:hover": {
      boxShadow: shadows[8],
      transform: "scale(1.2)"
    }
  },
  image: {
    objectFit: 'contain',

  },
    title: {
      color: palette.secondary.main
    }
});
class Skills extends Component {
  render() {
    const props = this.props;
    return (
      <Container id={'skills'}>
        <Subheader visible={props.visible}>Skills</Subheader>
        <Core.Fade in={props.visible}>
        <Core.Grid container spacing={16} justify={"center"}>
          {profile.skills.map(item => (
            <Core.Grid key={item.name} item sm={6} xs={12}>
              <Core.Card className={props.classes.card}>
                <Core.CardHeader
                  classes={{
                    title: props.classes.title
                  }}
                  title={item.name}
                />
                <Core.Divider />
                <Core.CardContent>
                  <Core.Grid container spacing={16} justify={"center"}>
                    {item.list.map(
                      skill =>
                        typeof skill === "string" ? (
                          <Core.Chip
                            key={skill}
                            className={props.classes.chip}
                            color={"primary"}
                            label={skill}
                          />
                        ) : (
                          <Core.Grid
                            key={skill.name}
                            item
                            sm={4}
                            xs={6}
                          >
                            <div>
                              <Core.Avatar
                                className={props.classes.avatar}
                                classes={{img: props.classes.image}}
                                src={skill.svg}
                              />
                              <Core.Typography
                                style={{ margin: "auto", width: "fit-content", marginTop: 4 }}
                                variant={"subtitle2"}
                              >
                                {skill.name}
                              </Core.Typography>
                            </div>
                          </Core.Grid>
                        )
                    )}
                  </Core.Grid>
                </Core.CardContent>
              </Core.Card>
            </Core.Grid>
          ))}
        </Core.Grid>
        </Core.Fade>
      </Container>
    );
  }
}
export default Core.withStyles(styles)(Skills);
