import React from 'react';
import Button from '@material-ui/core/Button';
import JSZip from 'jszip';
import type { FormState } from '../pages/console';
import { saveAs } from 'file-saver';
import { createStyles, makeStyles} from '@material-ui/core/styles';
interface DownloadProps {
  configData: FormState;
}
const packageJson = {
  name: 'agora-app-builder',
  version: '1.0.0',
  scripts: {
    start: 'app-builder-init',
    'start:info': 'app-builder-init --info',
  },
  keywords: [],
  license: 'MIT',
  dependencies: {
    'agora-app-builder-cli': '0.0.10',
  },
};
const useStyles = makeStyles(() =>
  createStyles({
    primarybutton: {
      color: '#fff',
      ['@media (max-width:1028px)']: {
        fontSize: '12px',
      },
    }
  }),
);

export default function Download(props: DownloadProps) {
  const dataURLtoFile = (file: string, name: string) => {
    var arr: string[] | Array<any> = file.split(','),
      mime = arr && arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], name, { type: mime });
  }
  const getBase64FromUrl = async (url:any) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = () => {
        const base64data = reader.result;   
        resolve(base64data);
      }
    });
  }
  const classes = useStyles({});
  const download = async() => {
    const zip = new JSZip();
    const AAB = zip.folder('agora-app-builder');
    if (AAB) {
      // AAB.file('config.json', JSON.stringify(props.configData, null, 2));
      AAB.file('config.json', JSON.stringify({
        projectName: props.configData.Product_id,
        displayName: props.configData.HEADING,
        logoRect: props.configData.logoRect?"logoRect.jpg":"",
        logoSquare: props.configData.logoSquare?"logoSquare.jpg":"",
        illustration: props.configData.illustration?"illustration.jpg":"",
        bg: props.configData.bg?"bg.jpeg":"",
        AppID: props.configData.AppID,
        primaryColor: props.configData.primaryColor,
        frontEndURL: props.configData.frontEndURL,
        backEndURL: props.configData.app_backend_url,
        pstn: props.configData.pstn,
        precall:props.configData.precall,
        watermark: "",
        chat: props.configData.chat,
        cloudRecording: props.configData.cloudRecording,
        screenSharing: props.configData.screenSharing,
        platformIos: false,
        platformAndroid: false,
        platformWeb: false,
        platformWindows: false,
        platformMac: false,
        platformLinux: false,
        APP_CERTIFICATE: props.configData.APP_CERTIFICATE,
        CUSTOMER_ID: props.configData.CUSTOMER_ID,
        CUSTOMER_CERTIFICATE: props.configData.CUSTOMER_CERTIFICATE,
        BUCKET_NAME: props.configData.BUCKET_NAME,
        BUCKET_ACCESS_KEY: props.configData.BUCKET_ACCESS_KEY,
        BUCKET_ACCESS_SECRET: props.configData.BUCKET_ACCESS_SECRET,
        CLIENT_ID: props.configData.CLIENT_ID,
        CLIENT_SECRET: props.configData.CLIENT_SECRET,
        REDIRECT_URL: props.configData.REDIRECT_URL,
        PSTN_USERNAME: props.configData.PSTN_USERNAME,
        PSTN_PASSWORD: props.configData.PSTN_PASSWORD,
        HEADING: props.configData.HEADING,
        SUBHEADING: props.configData.SUBHEADING,
        encryption: props.configData.encryption,
        ENABLE_OAUTH: props.configData.ENABLE_OAUTH,
        RECORDING_REGION: props.configData.RECORDING_REGION
      }, null, 2));
      AAB.file('package.json', JSON.stringify(packageJson, null, 2));
      if (props.configData.logoSquare !== "") {
        let dataURL:any;
        if(props.configData.logoSquare.includes('http')){
          dataURL = await getBase64FromUrl(props.configData.logoSquare)
        }
        else{
          dataURL=props.configData.logoSquare;
        }
        if(dataURL){
          AAB.file("logoSquare.jpg", dataURLtoFile(dataURL, 'logoSquare'), { binary: true });
        }
        // const str: string | null = localStorage.getItem('logoSquare');
        // if (str) {
        //   const { baseString, name } = JSON.parse(str);
        //   if (baseString !== "") {
        //     AAB.file("logoSquare.jpg", dataURLtoFile(baseString, name), { binary: true });
        //   }
        // }
      }
      if (props.configData.logoRect !== "") {
        let dataURL:any;
        if(props.configData.logoRect.includes('http')){
          dataURL = await getBase64FromUrl(props.configData.logoRect)
        }
        else{
          dataURL=props.configData.logoRect;
        }
        if(dataURL){
          AAB.file("logoRect.jpg", dataURLtoFile(dataURL, 'logoRect'), { binary: true });
        }
        // const str: string | null = localStorage.getItem('logoRect');
        // if (str) {
        //   const { baseString, name } = JSON.parse(str);
        //   if (baseString !== "") {
        //     AAB.file("logoRect.jpg", dataURLtoFile(baseString, name), { binary: true });
        //   }
        // }
      }
      if (props.configData.illustration !== "") {
        let dataURL:any;
        if(props.configData.illustration.includes('http')){
          dataURL = await getBase64FromUrl(props.configData.illustration)
        }
        else{
          dataURL=props.configData.illustration;
        }
        if(dataURL){
          AAB.file("illustration.jpg", dataURLtoFile(dataURL, 'illustration'), { binary: true });
        }
        // const str: string | null = localStorage.getItem('illustration');
        // if (str) {
        //   const { baseString, name } = JSON.parse(str);
        //   AAB.file("illustration.jpg", dataURLtoFile(baseString, name), {
        //     binary: true,
        //   });
        // }
      }
      if (props.configData.bg !== "") {
        let dataURL:any;
        if(props.configData.bg.includes('http')){
          dataURL = await getBase64FromUrl(props.configData.bg)
        }
        else{
          dataURL=props.configData.bg;
        }
        if(dataURL){
          AAB.file("bg.jpg", dataURLtoFile(dataURL, 'bg'), { binary: true });
        }
        // if (str) {
        //   const { baseString, name } = JSON.parse(str);
        //   if (baseString !== "") {
        //     AAB.file("back.jpg", dataURLtoFile(baseString, name), { binary: true });
        //   }
        // }
      }
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        // see FileSaver.js
        saveAs(content, `${props.configData.projectName}.zip`);
      });
    }
  };
  return (
    <Button
      style={{
        height: "100%"
      }}
      className={classes.primarybutton}
      variant="contained"
      disabled={props.configData.APP_CERTIFICATE==="" || props.configData.AppID===""}
      color="primary"
      onClick={download}
      disableElevation >
      Download source code
    </Button >
  );
}
