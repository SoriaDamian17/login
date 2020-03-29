import React from 'react';
import { Link } from '@reach/router';
import Layout from '../components/Layout';
import Avatar from '@material-ui/core/Avatar';
import Button from '../shared/Button';
import TextField from '../shared/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    },
    avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    },
    form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    },
}));

export default () => {

    const classes = useStyles();
    return (
        <Layout title="Forgot Password">
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h1>
                    Forgot Password
                    </h1>
                    <form className="form-control" noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Layout>
    )
}