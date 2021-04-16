import React from 'react';
import {
    Box, makeStyles,
    createStyles,
    Tooltip,

} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
interface textTip {
    name: string;
    tip: string;
}
export default function textTip(props: textTip) {
    const useStyles = makeStyles(() =>
        createStyles({
            Container: {
                display: "flex",
                alignItems: "center"
            },
            Text: {
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                color: "#394A64",
            },
            tipIcon: {
                marginLeft: "6px",
                color: "#099CFC"
            },
            ToolTip: {
                backgroundColor: "red"
            }
        }),
    );
    const classes = useStyles();
    return (
        <>
            <Box component="div" className={classes.Container}><Box component="span" className={classes.Text}> {props.name}</Box><Tooltip title={props.tip} >
                <InfoIcon className={classes.tipIcon} />
            </Tooltip></Box>
        </>
    )
}

