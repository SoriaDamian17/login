import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import './Layout.scss';

const Layout = (props) => {

    useEffect(() => {
        document.title = props.title;
    }, []);

    return (
        <div className="layout">
            <Grid container component="main">
                <Grid item xs={false} sm={4} md={7} className='bg-main' />
                {props.children}
            </Grid>
        </div>
    )
}

export default Layout;