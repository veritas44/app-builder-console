import React from 'react';
import {
  makeStyles,
  createStyles, Button
} from '@material-ui/core';
import type { LogoStateType, LogoType } from '../pages/console';


interface UploadProps {
  name: LogoType;
  handler: Function;
  value: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    uploadBox: {
      background: "#FFFFFF",
      border: "1px solid #DEE5EF",
      borderRadius: "4px",
      height: " 40px",
      marginRight: "10px",
      width: "70%",


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
    uploadBtn: {

      width: "25%",
      height: "40px",
    },


  }),
);

export default function Upload(props: UploadProps) {
  const classes = useStyles();
  const [SelectedImg, setSelectedImg] = React.useState<LogoStateType | any>(null);
  const hiddenInputElement = React.useRef<any>(null);

  React.useEffect(() => {
    console.log(props.handler)
    const objValue: string | null = localStorage.getItem(props.name);
    if (objValue) {
      const obj: any = JSON.parse(objValue);
      if (obj) {
        setSelectedImg(obj);
      }
      if (props.value === '') {
        setSelectedImg(null);
      }
    }
  }, [props.value]);

  function blobToDataURL(blob: Blob, callback: Function) {
    var a = new FileReader();
    a.onload = function (e: any) {
      callback(e.target.result);
    };
    a.readAsDataURL(blob);
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = (event.target.files && event.target.files.length > 0) ? event.target.files[0] : SelectedImg;
    setSelectedImg(file);
  };

  const onSubmitClick = () => {

    if (SelectedImg && SelectedImg !== null) {
      if (!SelectedImg.baseString) {
        blobToDataURL(SelectedImg, function (dataurl: string | null) {
          const img: any = new Image();
          img.src = dataurl;
          img.onload = () => {
            props.handler(dataurl, props.name);
            localStorage.setItem(props.name, JSON.stringify({
              baseString: dataurl,
              name: SelectedImg.name
            }));
          }
        });
      }
      else {
        props.handler(SelectedImg.baseString, props.name)
      }
    }
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
      <input
        ref={hiddenInputElement}
        type="file"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        accept={extensions.reduce(
          (acc, curr, idx) => `${idx === 1 ? '.' : ''}${acc},.${curr}`,
        )}
        id="file"
      />
      <Button
        variant="outlined"
        color="primary"
        component="label"
        className={classes.uploadBox}
        onClick={() => { hiddenInputElement.current.click(); }}
      >

        <div color="primary" style={{ textAlign: 'center', margin: '8px auto 12px auto', textOverflow: "ellipsis", overflow: "hidden", height: "20px", width: "120px" }}>
          {
            SelectedImg ? SelectedImg.name : 'Select a file'
          }
        </div>
        {SelectedImg && <img src="./Delete.svg" alt="..." onClick={(event) => {
          event.stopPropagation();
          setSelectedImg(null);
          hiddenInputElement.current.value = "";
          localStorage.removeItem(props.name);
          props.handler(null, props.name);
        }} />}

      </Button>
      <Button
        variant="outlined"
        color="primary"
        component="label"
        className={classes.uploadBtn}
        onClick={onSubmitClick}>Upload</Button>
    </>
  );
}
