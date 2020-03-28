import React from 'react';

import './Checkbox.scss';

const Checkbox = (props) => {
    return (
        <div className="ui-control-checkbox">
            <span>
                <input type="checkbox" {...props} />
            </span>
        </div>
    )
}

export default React.memo(Checkbox);