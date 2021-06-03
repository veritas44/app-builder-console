import React from 'react';
import Button from '@material-ui/core/Button';
import JSZip from 'jszip';
import type { FormState } from '../pages/builder';
import { saveAs } from 'file-saver';
import { DownloadStyles } from '../styles/DownloadStyles';
import {getToken} from '../config/apollo'
interface DownloadProps {
  configData: FormState;
  saveBtnState: String;
  saveBtnFn: Function;
}
const packageJson = {
  name: 'agora-app-builder',
  version: '1.0.0',
  scripts: {
    start: 'agora-app-builder-cli',
    'start:info': 'agora-app-builder-cli --info',
  },
  keywords: [],
  license: 'MIT',
  dependencies: {
    'agora-app-builder-cli': '1.0.1',
  },
};
const themeJson = {
  layoutProps: {topPinned: false},
  primaryButton: {
    width: '100%',
    backgroundColor: '#00AEFC',
    borderRadius: 100,
    maxWidth: 450,
    minWidth: 200,
    minHeight: 45,
  },
  primaryButtonText: {
    width: '100%',
    height: 45,
    lineHeight: 45,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
  },
  secondaryBtn: {
    width: '100%',
    borderColor: '#00AEFC',
    borderWidth: 1,
    borderRadius: 100,
    maxWidth: 450,
    minWidth: 200,
    minHeight: 45,
  },
  secondaryButtonText: {
    width: '100%',
    height: 45,
    lineHeight: 45,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    textAlignVertical: 'center',
    color: '#000',
  },
  textInput: {
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    borderColor: '#00AEFC',
    borderRadius: 100,
    borderWidth: 1,
    textAlign: 'center',
    color: '#333333',
    fontSize: 16,
    maxWidth: 450,
    minHeight: 45,
  },
  videoView: {
    flex: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  navHolder: {
    width: '100%',
    height: '6%',
    minHeight: 40,
    backgroundColor: '#f1f4f9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  controlsHolder: {
    minHeight: 68,
    maxHeight: '8%',
    backgroundColor: '#f1f4f9',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'relative',
    margin: 0,
    bottom: 0,
  },
  localButton: {
    backgroundColor: '#fff',
    borderRadius: 23,
    width: 40,
    height: 40,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: '70%',
    height: '70%',
    tintColor: '#00AEFC',
  },
};

export default function Download(props: DownloadProps) {
  const dataURLtoFile = (dataUrl: string, name: string) => {
    var arr: string[] | Array<any> = dataUrl.split(','),
      mime = arr && arr[0].match(/:(.*?);/)[1];
      return (fetch(dataUrl)
        .then(function(res){return res.blob();})
        .then(function(buf){return new File([buf], name, {type:mime});})
    );
  };
  const getBase64FromUrl = async (url: any) => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', getToken());
    const requestOptions: any = {
      method: 'GET',
      headers: myHeaders
    };
    const data = await fetch(`https://agoraappbuilder.com/api/file/imageDataUrl?project_id=${props.configData.id}&url=${url}`,requestOptions);
    let base64;
    if(data.status ===200){
      let response = await data.json();
      base64 =`data:application/octet-stream;base64,${response.base64Url}`
    }
    return base64;
    // const data = await fetch(url);
    // const blob = await data.blob();
    // return new Promise((resolve) => {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(blob);
    //   reader.onloadend = () => {
    //     const base64data = reader.result;
    //     resolve(base64data);
    //   };
    // });
  };
  const classes = DownloadStyles();
  const download = async () => {
    const zip = new JSZip();
    const AAB = zip.folder('agora-app-builder');
    let bgFileName;
    let squarFileName;
    let reactFileName;
    if (props.configData.logoSquare !== '') {
      if (props.configData.logoSquare.includes('http')) {
        squarFileName = `logoSquare.${
          props.configData.logoSquare.split('.')[
            props.configData.logoSquare.split('.').length - 1
          ]
        }`;
      } else {
        var arr: string[] | Array<any> = props.configData.logoSquare.split(','),
          mime = arr && arr[0].match(/:(.*?);/)[1];
        squarFileName = `logoSquare.${mime.split('/')[1]}`;
      }
    }
    if (props.configData.logoRect !== '') {
      if (props.configData.logoRect.includes('http')) {
        reactFileName = `logoRect.${
          props.configData.logoRect.split('.')[
            props.configData.logoRect.split('.').length - 1
          ]
        }`;
      } else {
        var arr: string[] | Array<any> = props.configData.logoRect.split(','),
          mime = arr && arr[0].match(/:(.*?);/)[1];
        reactFileName = `logoRect.${mime.split('/')[1]}`;
      }
    }
    if (props.configData.bg !== '') {
      if (props.configData.bg.includes('http')) {
        bgFileName = `bg.${
          props.configData.bg.split('.')[
            props.configData.bg.split('.').length - 1
          ]
        }`;
      } else {
        var arr: string[] | Array<any> = props.configData.bg.split(','),
          mime = arr && arr[0].match(/:(.*?);/)[1];
        bgFileName = `bg.${mime.split('/')[1]}`;
      }
    }
    if (AAB) {
      // AAB.file('config.json', JSON.stringify(props.configData, null, 2));
      AAB.file(
        'config.json',
        JSON.stringify(
          {
            PRODUCT_ID: props.configData.Product_id,
            APP_NAME: props.configData.HEADING || '',
            LOGO: props.configData.logoRect ? reactFileName : '',
            ICON: props.configData.logoSquare ? squarFileName : '',
            APP_ID: props.configData.AppID || '',
            PRIMARY_COLOR: props.configData.primaryColor || '',
            FRONTEND_ENDPOINT: props.configData.frontEndURL || '',
            BACKEND_ENDPOINT: props.configData.app_backend_url || '',
            PSTN: props.configData.pstn,
            PRECALL: props.configData.precall,
            CHAT: props.configData.chat,
            CLOUD_RECORDING: props.configData.cloudRecording,
            SCREEN_SHARING: props.configData.screenSharing,
            LANDING_SUB_HEADING: props.configData.SUBHEADING || '',
            BG: props.configData.bg ? bgFileName : '',
            ENCRYPTION_ENABLED: props.configData.encryption,
            PRIMARY_FONT_COLOR: props.configData.primaryFontColor || '',
            SECONDARY_FONT_COLOR: props.configData.secondaryFontColor || '',
            SENTRY_DSN: props.configData.sentry_dsn,
            ENABLE_GOOGLE_OAUTH: props.configData.ENABLE_GOOGLE_OAUTH,
            ENABLE_SLACK_OAUTH: props.configData.ENABLE_SLACK_OAUTH,
            ENABLE_MICROSOFT_OAUTH: props.configData.ENABLE_MICROSOFT_OAUTH,
            ENABLE_APPLE_OAUTH: props.configData.ENABLE_APPLE_OAUTH,
            APP_CERTIFICATE: props.configData.APP_CERTIFICATE || '',
            GOOGLE_CLIENT_ID: props.configData.GOOGLE_CLIENT_ID || '',
            GOOGLE_CLIENT_SECRET: props.configData.GOOGLE_CLIENT_SECRET || '',
            MICROSOFT_CLIENT_ID: props.configData.MICROSOFT_CLIENT_ID || '',
            MICROSOFT_CLIENT_SECRET:
              props.configData.MICROSOFT_CLIENT_SECRET || '',
            SLACK_CLIENT_ID: props.configData.SLACK_CLIENT_ID || '',
            SLACK_CLIENT_SECRET: props.configData.SLACK_CLIENT_SECRET || '',
            APPLE_CLIENT_ID: props.configData.APPLE_CLIENT_ID || '',
            APPLE_KEY_ID: props.configData.APPLE_KEY_ID || '',
            APPLE_PRIVATE_KEY: props.configData.APPLE_PRIVATE_KEY || '',
            APPLE_TEAM_ID: props.configData.APPLE_TEAM_ID || '',
            CUSTOMER_ID: props.configData.CUSTOMER_ID || '',
            CUSTOMER_CERTIFICATE: props.configData.CUSTOMER_CERTIFICATE || '',
            BUCKET_NAME: props.configData.BUCKET_NAME || '',
            RECORDING_REGION: props.configData.RECORDING_REGION || '',
            BUCKET_ACCESS_KEY: props.configData.BUCKET_ACCESS_KEY || '',
            BUCKET_ACCESS_SECRET: props.configData.BUCKET_ACCESS_SECRET || '',
            PSTN_EMAIL: props.configData.PSTN_EMAIL || '',
            PSTN_PASSWORD: props.configData.PSTN_PASSWORD || '',
            PSTN_ACCOUNT: props.configData.PSTN_ACCOUNT || '',
            PROFILE: '480p_8',
          },
          null,
          2,
        ),
      );
      AAB.file('package.json', JSON.stringify(packageJson, null, 2));
      AAB.file('theme.json', JSON.stringify(themeJson, null, 2));
      if (props.configData.logoSquare !== '') {
        let dataURL: any;
        let fileName: string;
        if (props.configData.logoSquare.includes('http')) {
          dataURL = await getBase64FromUrl(props.configData.logoSquare);
          fileName = `logoSquare.${
            props.configData.logoSquare.split('.')[
              props.configData.logoSquare.split('.').length - 1
            ]
          }`;
        } else {
          dataURL = props.configData.logoSquare;
          var arr: string[] | Array<any> = dataURL.split(','),
            mime = arr && arr[0].match(/:(.*?);/)[1];
          fileName = `logoSquare.${mime.split('/')[1]}`;
        }
        if (dataURL) {
          AAB.file(fileName, await dataURLtoFile(dataURL, 'logoSquare'), {
            binary: true,
          });
        }
      }
      if (props.configData.logoRect !== '') {
        let dataURL: any;
        let fileName: string;
        if (props.configData.logoRect.includes('http')) {
          dataURL = await getBase64FromUrl(props.configData.logoRect);
          fileName = `logoRect.${
            props.configData.logoRect.split('.')[
              props.configData.logoRect.split('.').length - 1
            ]
          }`;
        } else {
          dataURL = props.configData.logoRect;
          var arr: string[] | Array<any> = dataURL.split(','),
            mime = arr && arr[0].match(/:(.*?);/)[1];
          fileName = `logoRect.${mime.split('/')[1]}`;
        }
        if (dataURL) {
          AAB.file(fileName, await dataURLtoFile(dataURL, 'logoRect'), {
            binary: true,
          });
        }
      }
      if (props.configData.bg !== '') {
        let dataURL: any;
        let fileName: string;
        if (props.configData.bg.includes('http')) {
          dataURL = await getBase64FromUrl(props.configData.bg);
          fileName = `bg.${
            props.configData.bg.split('.')[
              props.configData.bg.split('.').length - 1
            ]
          }`;
        } else {
          dataURL = props.configData.bg;
          var arr: string[] | Array<any> = dataURL.split(','),
            mime = arr && arr[0].match(/:(.*?);/)[1];
          fileName = `bg.${mime.split('/')[1]}`;
        }
        if (dataURL) {
          AAB.file(fileName, await dataURLtoFile(dataURL, 'bg'), {binary: true});
        }
      }
      zip.generateAsync({type: 'blob'}).then(function (content) {
        // see FileSaver.js
        console.log(props.configData);
        saveAs(content, `${props.configData.HEADING}.zip`);
      });
    }
  };
  return (
    <Button
      style={{
        height: '100%',
      }}
      className={classes.primarybutton}
      variant="contained"
      color="primary"
      onClick={async() => {
        if (props.saveBtnState === 'saved') {
          download();
        }
        else {
          const apiResponse = await props.saveBtnFn();
          if (apiResponse) {
            download();
          }
        }
      }}
      disableElevation >
      Download source code
    </Button>
  );
}
