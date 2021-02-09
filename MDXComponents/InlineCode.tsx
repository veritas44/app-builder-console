import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Typography, {TypographyProps} from '@material-ui/core/Typography';

const useStyles = makeStyles(
  createStyles({
    inlineCodeStyle: {
      display: 'inline-block',
      backgroundColor: '#F3F3F3',
      color: '#083EFC',
      paddingLeft: '4px',
      paddingRight: '4px',
      fontSize: 'inherit',
    },
  }),
);

const InlineCode = (props: TypographyProps) => {
  const classes = useStyles();
  return <Typography className={classes.inlineCodeStyle} {...props} />;
};

export default InlineCode;
