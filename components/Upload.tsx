import React from 'react';
import {Button, Box} from '@material-ui/core';
import type {LogoStateType, LogoType} from '../pages/console';
import {UploadStyles} from '../pages/UploadStyles';

interface UploadProps {
  name: LogoType;
  handler: Function;
  value: string;
}

export default function Upload(props: UploadProps) {
  const classes = UploadStyles();
  const [SelectedImg, setSelectedImg] = React.useState<LogoStateType | any>(
    null,
  );
  const hiddenInputElement = React.useRef<any>(null);
  const hiddenUploadBtnElement = React.useRef<any>(null);

  React.useEffect(() => {
    const objValue: string | null = localStorage.getItem(props.name);
    if (objValue && props.value !== '') {
      const obj: any = JSON.parse(objValue);
      obj.baseString = props.value;
      if (obj) {
        setSelectedImg(obj);
      }
    } else {
      setSelectedImg(null);
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
    const file =
      event.target.files && event.target.files.length > 0
        ? event.target.files[0]
        : SelectedImg;
    setSelectedImg(() => file);
    onSubmitClick(file);
  };

  const onSubmitClick = (selectedFile: any) => {
    if (selectedFile && selectedFile !== null) {
      if (!selectedFile.baseString) {
        blobToDataURL(selectedFile, function (dataurl: string | null) {
          localStorage.setItem(
            props.name,
            JSON.stringify({
              baseString: '',
              name: selectedFile.name,
            }),
          );
          const img: any = new Image();
          img.src = dataurl;
          img.onload = () => {
            props.handler(dataurl, props.name);
          };
        });
      } else {
        props.handler(selectedFile.baseString, props.name);
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
        style={{display: 'none'}}
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
        onClick={() => {
          hiddenInputElement.current.click();
        }}>
        <div
          color="primary"
          style={{
            textAlign: 'center',
            margin: '8px auto 12px auto',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            height: '20px',
            width: '120px',
          }}>
          {SelectedImg ? SelectedImg.name : 'Select a file'}
        </div>
        {/* {SelectedImg && <img src="./Delete.svg" alt="..." onClick={(event) => {
          event.stopPropagation();
          setSelectedImg(null);
          hiddenInputElement.current.value = "";
          localStorage.removeItem(props.name);
          props.handler(null, props.name);
        }} />} */}
      </Button>
      {SelectedImg && (
        <Box
          fontSize="12px"
          lineHeight={2}
          style={{cursor: 'pointer'}}
          ml={6}
          color="red"
          onClick={(event) => {
            event.stopPropagation();
            setSelectedImg(null);
            hiddenInputElement.current.value = '';
            localStorage.removeItem(props.name);
            props.handler(null, props.name);
          }}>
          Remove Image.
        </Box>
      )}
      <Button
        ref={hiddenUploadBtnElement}
        variant="outlined"
        color="primary"
        component="label"
        className={classes.uploadBtn}
        onClick={() => {
          onSubmitClick(SelectedImg);
        }}>
        Upload
      </Button>
    </>
  );
}
