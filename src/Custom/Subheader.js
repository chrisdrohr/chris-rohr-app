import {withStyles} from "@material-ui/core";
import * as Core from "@material-ui/core";
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
        transition: create(['opacity', 'transform'], duration.enteringScreen, easing.easeIn),
    },
    divider: {
        transition: create('width', duration.enteringScreen, easing.sharp),
        backgroundColor: palette.secondary.main,
        height: 5,
        margin: 'auto',
        borderRadius: shape.borderRadius,
        marginBottom: 8,
    },

});
const Subheader = props => (
    <Core.ListSubheader
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
        <Core.Divider
            style={{
                width: props.visible ? 100 : 0
            }}
            className={props.classes.divider}/>
    </Core.ListSubheader>
);
export default withStyles(styles)(Subheader);