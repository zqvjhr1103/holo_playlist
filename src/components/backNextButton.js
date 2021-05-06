import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

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
        width: "60px",
        height: "20px",
        padding: "7px"
    },
    typography: {
    },
    icon: {
    }
});

const checkTypeShow = (classes, props) => {
    if (props.type === "Next") {
        return (
            <div
                className={classes.paper}
                onClick={() => { props.onClickBackNext(); }}
            >
                <Typography className={classes.typography} >{props.type}</Typography>
                <SkipNextIcon />
            </div>
        )
    }
    if (props.type === "Back") {
        return (
            <div
                className={classes.paper}
                onClick={() => { props.onClickBackNext(); }}
            >
                <SkipPreviousIcon />
                <Typography className={classes.typography} >{props.type}</Typography>
            </div>
        )
    }
}

const BackNextButton = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper>
                {checkTypeShow(classes, props)}
            </Paper>
        </div>
    );
};

export default withStyles(styles)(BackNextButton);
