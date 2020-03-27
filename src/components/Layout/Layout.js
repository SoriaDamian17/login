import React, {useEffect} from 'react';
import './Layout.scss';

const Layout = (props) => {

    useEffect(() => {
        document.title = props.title;
    }, []);

    return (
        <div className="layout">
            {props.children}
        </div>
    )
}

export default Layout;