import React from "react";
import {MobileStepper} from '@material-ui/core';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { withState, toRenderProps } from "recompose";
const AutoPlaySwipeViews = autoPlay(SwipeableViews);
const State = toRenderProps(withState("index", "onChange", 0));
const AutoSwipeView = props => {
  return (
    <State>
      {({ index, onChange }) => (
        <React.Fragment>
        <AutoPlaySwipeViews
        style={{textAlign: 'center'}}
          index={index}
          interval={5000}
          onChangeIndex={index => onChange(index)}
        >
          {props.children}
        </AutoPlaySwipeViews>
          <MobileStepper
          style={{
            flexGrow: 1,
            width: '100%',
            backgroundColor: 'transparent',
            justifyContent: 'center',
            marginTop: -16,
          }}
          activeStep={index}
            variant={'dots'}
            steps={props.children.length}
            position={'static'}
/>
        </React.Fragment>
      )}
    </State>
  );
};
export default AutoSwipeView;
