import React from 'react';
import Typography, {TypographyProps} from '@material-ui/core/Typography';

export default function Li(props: Partial<TypographyProps<'li'>>) {
  return (
    <Typography variant={'body1'} gutterBottom component={'li'} {...props} />
  );
}
