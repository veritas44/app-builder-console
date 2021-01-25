import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/RemoveRounded';
import ExpandMore from '@material-ui/icons/AddRounded';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    icons: {
      fontSize: theme.typography.fontSize,
      color: theme.palette.primary.main,
      minWidth: theme.spacing(2),
    },
    menuItemText: {
      fontSize: '0.8rem',
    },
    menuItem: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      transition: theme.transitions.create(['color'], {
        duration: theme.transitions.duration.complex,
      }),
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: 'unset',
      },
    },
    collapseButton: {
      paddingLeft: theme.spacing(1),
    },
    collapseListItem: {
      '&:hover': {
        backgroundColor: 'unset',
      },
    },
    sectionHeading: {
      '&:hover': {
        fontWeight: 500,
      },
    },
    nested: {
      paddingLeft: theme.spacing(5),
    },
  }),
);

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
      className={classes.root}>
      <ListItem
        button
        disableRipple
        className={classes.collapseListItem}
        disableTouchRipple
        onClick={handleClick}>
        {open ? (
          <ExpandLess className={classes.icons} />
        ) : (
          <ExpandMore className={classes.icons} />
        )}
        <ListItemText
          className={classes.collapseButton}
          primaryTypographyProps={{
            classes: {
              root: classes.sectionHeading,
            },
          }}
          primary="Inbox"
        />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            disableRipple
            disableTouchRipple
            className={clsx([classes.nested, classes.menuItem])}>
            <ListItemText
              primaryTypographyProps={{
                classes: {
                  root: classes.menuItemText,
                },
              }}
              primary="Starreasdasdd"
            />
          </ListItem>
          <ListItem
            button
            disableRipple
            disableTouchRipple
            className={clsx([classes.nested, classes.menuItem])}>
            <ListItemText
              primaryTypographyProps={{
                classes: {
                  root: classes.menuItemText,
                },
              }}
              primary="Starreasdasdd"
            />
          </ListItem>
          <ListItem
            button
            disableRipple
            disableTouchRipple
            className={clsx([classes.nested, classes.menuItem])}>
            <ListItemText
              primaryTypographyProps={{
                classes: {
                  root: classes.menuItemText,
                },
              }}
              primary="Starreasdasdd"
            />
          </ListItem>
          <ListItem
            button
            disableRipple
            disableTouchRipple
            className={clsx([classes.nested, classes.menuItem])}>
            <ListItemText
              primaryTypographyProps={{
                classes: {
                  root: classes.menuItemText,
                },
              }}
              primary="Starreasdasdd"
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
