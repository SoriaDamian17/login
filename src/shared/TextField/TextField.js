import React from 'react';

import './TextField.scss';

const TextField = (props) => {
    return (
        <div class="ui-control-textfield">
            <input {...props} />
            <label for={props.id}>{props.label} {props.required && <sub>*</sub>}</label>
        </div>
    )
}

export default React.memo(TextField);