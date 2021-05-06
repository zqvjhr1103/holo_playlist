import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    input: {
        display: "none"
    },
    paper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgb(245, 245, 245)",
        width: "100px",
        height: "20px",
        padding: "7px"
    },
    typography: {
    },
    icon: {
    }
});

const AllDeleteButton = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper
                className={classes.paper}
                onClick={() => {
                    props.handleCheckDialog();
                }}
            >
                <HighlightOffIcon className={classes.icon} />
                <Typography className={classes.typography} >All Delete</Typography>
            </Paper>
            <Dialog
                open={props.flagCheckDialg}
                onClose={() => { props.handleCheckDialog(); }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete all playlist?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => { props.handleCheckDialog(); }} color="primary" autoFocus>
                        No
                    </Button>
                    <Button onClick={() => { props.onClickDeleteAll(); }} color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(AllDeleteButton);
