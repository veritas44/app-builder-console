import React from 'react';
import Button from '@material-ui/core/Button';
import JSZip from 'jszip';
import type {FormState} from '../pages/console';
import {saveAs} from 'file-saver';
import {DownloadStyles} from '../styles/DownloadStyles';
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
const themeJson = {
  "layoutProps": {"topPinned": false},
  "primaryButton":{
    "width": "100%",
    "backgroundColor": "#00AEFC",
    "borderRadius": 100,
    "maxWidth": 450,
    "minWidth": 200,
    "minHeight": 45
  },
  "primaryButtonText": {
    "width": "100%",
    "height": 45,
    "lineHeight": 45,
    "fontSize": 16,
    "textAlign": "center",
    "textAlignVertical": "center",
    "color": "#fff"
  },
  "secondaryBtn": {
    "width": "100%",
    "borderColor": "#00AEFC",
    "borderWidth": 1,
    "borderRadius": 100,
    "maxWidth": 450,
    "minWidth": 200,
    "minHeight": 45
  },
  "secondaryButtonText": {
    "width": "100%",
    "height": 45,
    "lineHeight": 45,
    "fontSize": 16,
    "textAlign": "center",
    "fontWeight": "500",
    "textAlignVertical": "center",
    "color": "#000"
  },
  "textInput": {
    "width": "100%",
    "paddingLeft": 8,
    "paddingRight": 8,
    "borderColor": "#00AEFC",
    "borderRadius": 100,
    "borderWidth": 1,
    "textAlign": "center",
    "color": "#333333",
    "fontSize": 16,
    "maxWidth": 450,
    "minHeight": 45
  },
  "videoView": {
    "flex": 12,
    "backgroundColor": "#fff",
    "flexDirection": "row"
  },
  "navHolder": {
    "width": "100%",
    "height": "6%",
    "minHeight": 20,
    "backgroundColor": "#f1f4f9",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end"
  },
  "controlsHolder": {
    "minHeight": 50,
    "maxHeight": "8%",
    "backgroundColor": "#f1f4f9",
    "flexDirection": "row",
    "justifyContent": "space-evenly",
    "position": "relative",
    "margin": 0,
    "bottom": 0
  },
  "localButton": {
    "backgroundColor": "#fff",
    "borderRadius": 23,
    "width": 46,
    "height": 46,
    "display": "flex",
    "alignSelf": "center",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "buttonIcon": {
    "width": "70%",
    "height": "70%",
    "tintColor": "#00AEFC"
  }
}

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
  };
  const classes = DownloadStyles();
  const download = async () => {
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
        primaryFontColor: props.configData.primaryFontColor,
        secondaryFontColor: props.configData.secondaryFontColor,
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
        MICROSOFT_CLIENT_ID: props.configData.MICROSOFT_CLIENT_ID,
        MICROSOFT_CLIENT_SECRET: props.configData.MICROSOFT_CLIENT_SECRET,
        SLACK_CLIENT_ID: props.configData.SLACK_CLIENT_ID,
        SLACK_CLIENT_SECRET: props.configData.SLACK_CLIENT_SECRET,
        APPLE_CLIENT_ID: props.configData.APPLE_CLIENT_ID,
        APPLE_KEY_ID: props.configData.APPLE_KEY_ID,
        APPLE_PRIVATE_KEY: props.configData.APPLE_PRIVATE_KEY,
        APPLE_TEAM_ID: props.configData.APPLE_TEAM_ID,
        REDIRECT_URL: props.configData.REDIRECT_URL,
        PSTN_EMAIL: props.configData.PSTN_EMAIL,
        PSTN_ACCOUNT: props.configData.PSTN_ACCOUNT,
        PSTN_PASSWORD: props.configData.PSTN_PASSWORD,
        HEADING: props.configData.HEADING,
        SUBHEADING: props.configData.SUBHEADING,
        encryption: props.configData.encryption,
        ENABLE_OAUTH: props.configData.ENABLE_OAUTH,
        RECORDING_REGION: props.configData.RECORDING_REGION
      }, null, 2));
      AAB.file('package.json', JSON.stringify(packageJson, null, 2));
      AAB.file('theme.json',JSON.stringify(themeJson,null,2));
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
      }
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        // see FileSaver.js
        console.log(props.configData);
        saveAs(content, `${props.configData.HEADING}.zip`);
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
