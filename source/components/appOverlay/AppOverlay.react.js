import React from 'react';
import Overlay from './Overlay.react';

class AppOverlay extends React.Component {

    static defaultProps = {
        color: 'blue',
        text: 'Confirm',
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Overlay color="red" text="vincent" />
            </div>
        );
    }
};

export default AppOverlay;