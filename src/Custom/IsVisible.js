import React, {Component} from 'react';
import VisibilitySensor from "react-visibility-sensor";

const IsVisible = (WrappedComponent) => {
    class HOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                element: null,
            }
        }

        componentDidMount() {
            this.setState({element: document.getElementById('container')})
        }

        render() {
            const containmentDOMRect = this.state.element ? this.state.element : null;
            return (
                <VisibilitySensor
                    containment={containmentDOMRect}>
                    {({isVisible}) => <WrappedComponent isVisible={isVisible}/>}
                </VisibilitySensor>
            )
        }
    }
    return HOC;
};
export default IsVisible;