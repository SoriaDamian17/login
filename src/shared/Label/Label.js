import React from 'react';

import './Label.scss';

const Label = (props) => {

    return (
        <div className="ui-control-label">
            {props.label && 
            <label>
                {props.control}
                <span>{props.label}</span>
            </label>
            }
        </div>
    )
}

export default React.memo(Label);