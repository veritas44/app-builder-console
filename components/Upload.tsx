import React from 'react';
import {Button, Grid, Tooltip} from '@material-ui/core';
import type {LogoStateType, LogoType} from '../pages/console';
import InfoIcon from '@material-ui/icons/Info';

interface UploadProps {
  label: string;
  file: LogoStateType;
  name: LogoType;
  handler: (file: LogoStateType, name: LogoType) => void;
  tip: string;
}

export default function Upload(props: UploadProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handler(
      event.target.files ? event.target.files[0] : null,
      props.name,
    );
  };

  const onInputClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    const element = event.target as HTMLInputElement;
    element.value = '';
  };

  const extensions: string[] = [
    'jpeg',
    'jpg',
    'png',
    'webp',
    'tiff',
    'tif',
    'gif',
    'svg',
  ];

  return (
    <>
      <Grid container spacing={0} alignItems="center">
        <Grid xs={11} item>
          <Button
            variant="outlined"
            color="primary"
            component="label"
            style={{width: '75%'}}>
            {props.label}
            <input
              type="file"
              onChange={handleFileUpload}
              onClick={onInputClick}
              style={{display: 'none'}}
              accept={extensions.reduce(
                (acc, curr, idx) => `${idx === 1 ? '.' : ''}${acc},.${curr}`,
              )}
            />
          </Button>
        </Grid>
        <Grid xs={1} item>
          {props.tip ? (
            <Tooltip title={props.tip} arrow>
              <InfoIcon color={'secondary'} />
            </Tooltip>
          ) : (
            <></>
          )}
        </Grid>
        <p
          color="primary"
          style={{textAlign: 'center', margin: '8px auto 12px auto'}}>
          {props.file ? props.file.name : 'No file is selected'}
        </p>
      </Grid>
    </>
  );
}
