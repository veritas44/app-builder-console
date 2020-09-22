import React from 'react';
import Button from '@material-ui/core/Button';
import type {LogoStateType, LogoType} from '../pages/console';

interface UploadProps {
  label: string;
  file: LogoStateType;
  name: LogoType;
  handler: (file: LogoStateType, name: LogoType) => void;
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
      <Button variant="outlined" color="primary" component="label">
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
      <p color="primary">
        {props.file ? props.file.name : 'No file is selected'}
      </p>
    </>
  );
}
