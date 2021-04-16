import React from 'react';
import {
  makeStyles,
  createStyles, Button, Theme
} from '@material-ui/core';
import type { LogoStateType, LogoType } from '../pages/console';


interface UploadProps {
  name: LogoType;
  handler: (file: LogoStateType, name: LogoType) => void;

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadBox: {
      background: "#FFFFFF",
      border: "1px solid #DEE5EF",
      borderRadius: "4px",
      width: "164px",
      height: " 40px",
    },
    uploadBox_text: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      color: "#8D959D",
      display: "flex",
      alignItems: "center"
    },
    mainHading: {
      fontWeight: 500,
      fontSize: "22px",
      color: "#222222",
      marginBottom: "24px"
    },
    Text: {
      fontWeight: "normal",
      fontSize: " 18px",
      color: "#222222",
      marginBottom: "16px"
    },

  }),
);

export default function Upload(props: UploadProps) {
  const classes = useStyles();
  const [rectLogo, setRectLogo] = React.useState<LogoStateType>(null);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setRectLogo(file);
  };

  const onSubmitClick = () => {
    props.handler(rectLogo, props.name);
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
      <Button
        variant="outlined"
        color="primary"
        component="label"
        className={classes.uploadBox}
        style={{ width: '75%' }}>
        {/* {props.label} */}
        <input
          type="file"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          accept={extensions.reduce(
            (acc, curr, idx) => `${idx === 1 ? '.' : ''}${acc},.${curr}`,
          )}
        />
        <div className={classes.uploadBox_text}>
          <div>
            <p color="primary" style={{ textAlign: 'center', margin: '8px auto 12px auto', textOverflow: "----", overflow: "hidden" }}>
              {rectLogo ? rectLogo.name : 'Select a file'}
            </p></div>
          {rectLogo && <div><img src="./Delete.svg" alt="..." onClick={(event) => {
            event.stopPropagation();
            setRectLogo(null);
          }} /></div>}
        </div>
      </Button>
      <Button
        variant="outlined"
        color="primary"
        component="label"
        className={classes.uploadBox}
        onClick={onSubmitClick}>Upload</Button>

    </>
  );
}
