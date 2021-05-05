import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

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
        width: "120px",
        height: "20px",
        padding: "7px"
    },
    typography: {
    },
    icon: {
    }
});

const AddPlayList = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <input
                className={classes.input}
                accept="playlist"
                id="contained-button-file"
                multiple
                type="file"
                onChange={e => {
                    props.onClickAddPlayList(e);
                }}
            />
            <label htmlFor="contained-button-file">
                <Paper
                    className={classes.paper}
                >
                    <PlaylistAddIcon className={classes.icon} />
                    <Typography className={classes.typography} >Add PlayList</Typography>
                </Paper>
            </label>
        </div>
    );
};

export default withStyles(styles)(AddPlayList);
