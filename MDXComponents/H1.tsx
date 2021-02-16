import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Typography, {TypographyProps} from '@material-ui/core/Typography';

const useStyles = makeStyles(
  createStyles({
    headingText: {
      fontWeight: 700,
    },
  }),
);

const H1 = (props: TypographyProps) => {
  const classes = useStyles();
  return (
    <Typography
      color={'primary'}
      className={classes.headingText}
      gutterBottom
      variant={'h1'}
      {...props}
    />
  );
};

export default H1;
