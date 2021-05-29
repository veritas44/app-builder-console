import React from 'react';
import {Box, Tooltip} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import {textTipStyles} from '../styles/textTipStyles';
interface textTip {
  name: string;
  tip: string;
}
export default function textTip(props: textTip) {
  const classes = textTipStyles();

  return (
    <>
      <Box component="div" className={classes.Container}>
        <Box component="span" className={classes.Text}>
          {' '}
          {props.name}
        </Box>
        <Tooltip title={props.tip}>
          <InfoIcon className={classes.tipIcon} />
        </Tooltip>
      </Box>
    </>
  );
}
