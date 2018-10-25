import * as Core from "@material-ui/core";
import React from "react";

const Container = props => (
    <Core.CardContent id={props.id}>
        {props.children}
    </Core.CardContent>
);
export default Container;