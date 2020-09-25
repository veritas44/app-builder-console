import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {

  return (
    <div
      style={{
        alignSelf: 'center',
        justifySelf: 'center',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
      }}>
      <Typography
        variant="overline"
        color="textSecondary"
        align="center"
        gutterBottom>
        {'Copyright © '}
        <MuiLink color="inherit" href="https://agora.io">
          Agora
        </MuiLink>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </div>
  );
}
