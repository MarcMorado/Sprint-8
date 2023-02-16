import React, { Component} from "react";
import Portal from "./Portal";
import '../style/Styles.css'

export default class ShipInfo extends Component {
    render () {

        const {children, toggle, active} = this.props;

        return(
            <Portal>
                {active &&
                    <div className="info-wrapper">
                        <div className="info-window">
                            <button className="info-close" onClick={toggle}>X</button>
                            <div>{children}</div>
                        </div>
                    </div>
                }
            </Portal>
        )
    }
}