import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {

    const type = props.outline ? 'outline--' : 'button--';
    const styleClass = 'button '+ type + props.variant;

    function handleClick() {
        if (props.href) {
            window.location.href = props.href;
        }
    }

    return (
        <button type={props.type} className={styleClass} onClick={() => handleClick()}>
            {props.title}
        </button>
    )
}

Button.defaultProps = {
    variant: 'primary',
    type: 'button',
    size: 'sm',
    href: ''
};

Button.PropTypes = {
    title: PropTypes.string,
    /**
     * One or more button variant combinations
     *
     * buttons may be one of a variety of visual variants such as:
     *
     * `'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`
     */
    variant: PropTypes.string,
    /**
    * as well as "outline" versions (prefixed by 'outline-*')
    *
    * `'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'`
    */
    outline: false,
    /**
     * Specifies a large or small button.
     *
     * @type ('sm'|'lg')
     */
    size: PropTypes.string,
    /** Providing a `href` will call function HandleClick */
    href: PropTypes.string,
    /**
     * Defines HTML button type attribute.
     *
     * @default 'button'
     */
    type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
}

export default React.memo(Button);