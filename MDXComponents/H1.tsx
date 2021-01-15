import React from 'react';
import Typography, {TypographyProps} from '@material-ui/core/Typography';

const H1 = (props: TypographyProps) => (
  <Typography color={'primary'} gutterBottom variant={'h1'} {...props} />
);

export default H1;
