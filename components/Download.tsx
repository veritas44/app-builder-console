import React from 'react';
import Button from '@material-ui/core/Button';
import JSZip from 'jszip';
import type { FormState } from '../pages/console';
import { saveAs } from 'file-saver';

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

  const download = () => {
    const zip = new JSZip();
    const AAB = zip.folder('agora-app-builder');
    if (AAB) {
      AAB.file('config.json', JSON.stringify(props.configData, null, 2));
      AAB.file('package.json', JSON.stringify(packageJson, null, 2));
      if (props.configData.logoSquare !== "") {
        const str: string | null = localStorage.getItem('logoSquare');
        if (str) {
          const { baseString, name } = JSON.parse(str);
          if (baseString !== "") {
            AAB.file("logoSquare.jpg", dataURLtoFile(baseString, name), { binary: true });
          }
        }
      }
      if (props.configData.logoRect !== "") {
        const str: string | null = localStorage.getItem('logoRect');
        if (str) {
          const { baseString, name } = JSON.parse(str);
          if (baseString !== "") {
            AAB.file("logoRect.jpg", dataURLtoFile(baseString, name), { binary: true });
          }
        }
      }
      if (props.configData.illustration !== "") {
        const str: string | null = localStorage.getItem('illustration');
        if (str) {
          const { baseString, name } = JSON.parse(str);
          AAB.file("illustration.jpg", dataURLtoFile(baseString, name), {
            binary: true,
          });
        }
      }
      if (props.configData.bg !== "") {
        const str: string | null = localStorage.getItem('bg');
        if (str) {
          const { baseString, name } = JSON.parse(str);
          if (baseString !== "") {
            AAB.file("back.jpg", dataURLtoFile(baseString, name), { binary: true });
          }
        }
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
        color: '#fff',
        fontSize: "12px",
        height: "100%"
      }}
      variant="contained"
      disabled={props.configData.APP_CERTIFICATE==="" || props.configData.AppID===""}
      color="primary"
      onClick={download}
      disableElevation >
      Download source code
    </Button >
  );
}
