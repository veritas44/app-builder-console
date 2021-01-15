import React from 'react';
import Typography, {TypographyProps} from '@material-ui/core/Typography';

export default (props: TypographyProps) => (
  <Typography variant={'body1'} gutterBottom {...props} />
);
