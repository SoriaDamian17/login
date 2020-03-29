import React from 'react';

import './TextField.scss';

const TextField = (props) => {
    return (
        <div className="ui-control-textfield">
            <input {...props} />
            <label>{props.label} {props.required && <sub>*</sub>}</label>
        </div>
    )
}

export default React.memo(TextField);