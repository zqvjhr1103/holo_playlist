import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
    root: {}
});

const ListButton = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List>
                <ListItem button onClick={e => props.onEventSelectList()}>
                    <ListItemText primary={props.listName} />
                </ListItem>
            </List>
        </div>
    );
};

export default withStyles(styles)(ListButton);
