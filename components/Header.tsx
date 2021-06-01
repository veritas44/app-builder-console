import React from 'react';
// import {Paper, Container, IconButton} from '@material-ui/core';
import {ButtonAppBarStyles} from '../styles/HeaderStyles';

export default function ButtonAppBar() {
  const classes = ButtonAppBarStyles();

  return (
    <>
      {/* Dummy element that renders behind navbar */}
      <div className={classes.root} />
    </>
  );
}
