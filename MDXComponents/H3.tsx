import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Typography, {TypographyProps} from '@material-ui/core/Typography';

const useStyles = makeStyles(
  createStyles({
    headingText: {
      fontSize: '2rem',
    },
  }),
);

// const assignChildSize = (children : any) =>{
//     children.forEach((child: any)=>{
//       child.props.parentName == "h3"?
//       })
//   }

const H3 = (props: TypographyProps) => {
  const classes = useStyles();
  return (
    <Typography
      variant={'h3'}
      className={classes.headingText}
      gutterBottom
      {...props}
    />
  );
};

export default H3;
