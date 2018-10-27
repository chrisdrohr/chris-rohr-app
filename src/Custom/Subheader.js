import {withStyles} from "@material-ui/core";
import {Divider, ListSubheader} from "@material-ui/core";
import {font} from "../Constants";
import React from "react";

const styles = ({
                    breakpoints,
                    palette,
                    shadows,
                    shape,
                    spacing,
                    transitions: {create, easing, duration},
                    zIndex
                }) => ({
    content: {
        willChange: 'transform, opacity',
        transition: create(['opacity', 'transform'], duration.enteringScreen, easing.easeIn),
    },
    divider: {
        willChange: 'transform',
        transition: create('transform', duration.enteringScreen, easing.sharp),
        width: 100,
        backgroundColor: palette.secondary.main,
        height: 5,
        margin: 'auto',
        borderRadius: shape.borderRadius,
        marginBottom: 8,
    },

});
const Subheader = props => (
    <ListSubheader
        disableSticky
        style={{
            lineHeight: '32px',
            margin: '0 auto 8px auto',
            fontFamily: font,
            fontWeight: 800,
            textAlign: 'center'
        }}>
        <div
            className={props.classes.content}
            style={{
                opacity: props.visible ? 1 : 0,
                transform: props.visible ? 'translateY(0px)' : 'translateY(20px)',
            }}>
        {props.children}
        </div>
        <Divider
            style={{
                transform: props.visible ? 'rotateY(0deg)' : 'rotateY(90deg)'
            }}
            className={props.classes.divider}/>
    </ListSubheader>
);
export default withStyles(styles)(Subheader);