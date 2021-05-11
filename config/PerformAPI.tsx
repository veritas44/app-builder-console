
import client from '../config/apollo';
import { projectList, projectById, projectByIdPooling, projectByProductId } from '../config/query';
import { projectCreateInput, updateProject } from './dataOpration';
import { uploadFile, deployToHeroku, deployToVercel } from './REST_API';


interface ConfigInterface {
  project_template: string;
  app_backend_deploy_status: string;
  id: String;
  ownerId: number;
  checked?: boolean;
  name?: string;
  projectName: string;
  displayName: string;
  primary_logo: string;
  primary_bg_logo: string;
  primary_square_logo: string;
  illustration_file: string;
  bg: string;
  agora_app_id: string;
  primary_color: string;
  frontEndURL: string;
  backEndURL: string;
  pstn_dial_in: false;
  precall_screen: false;
  chat: false;
  cloud_recording: false;
  screen_share: false;
  agora_app_certificate: string;
  agora_customer_id: string;
  agora_customer_certificate: string;
  s3_bucket_name: string;
  s3_bucket_access_key: string;
  s3_bucket_access_secret: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URL: string;
  pstn_turbo_bridge_name: string;
  pstn_turbo_bridge_password: string;
  title: string;
  description: string;
  video_encryption: false;
  ENABLE_OAUTH: false;
  s3_bucket_region: string;
  code: String;

}



export const getprojectsList = async (skipData:number) => {
  let output: boolean = false;
  const response = await client.query({ query: projectList(skipData) });
  if (response.data) {
    output = response.data;
  }
  return output;
};

export const getprojectById = async (id: string) => {
  let output: boolean = false;
  if (id !== null) {
    const response = await client.query({ query: projectById(id.toString()) });
    if (response.data) {
      output = response.data;
    }
  }
  return output;
};
export const getprojectByIdPooling = async (id: string) => {
  let output: boolean = false;
  if (id !== null) {
    const response = await client.query({ query: projectByIdPooling(id.toString()) });
    if (response.data) {
      output = response.data;
    }
  }
  return output;
};
export const checkProductId = async (id:string) =>{
  let output: boolean = false;
  if (id !== null) {
    const response = await client.query({ query: projectByProductId(id.toString()) });
    if (response.data) {
      console.log(response);
      output = response.data.projectByProductId?response.data.projectByProductId.productId:false;
    }
  }
  return output;
}
export const createProjectData = async (data: ConfigInter, title: String) => {
  let output: boolean = false;
  if (data) {
    const newData: ConfigInter = await convertToqueryVariable(data, title);
    const response = await client.mutate({
      mutation: projectCreateInput,
      variables: { data: newData },
    });
    if (response.data) {
      output = response.data;
    }
  }
  return output;
};

export const updateProjectData = async (data: ConfigInter) => {
  let output: boolean = false;
  if (data) {
    try {
      const newData: ConfigInter = await convertToqueryVariable(data, '');
      const response = await client.mutate({
        mutation: updateProject,
        variables: { data: newData },
      });
      if (response.data) {
        output = response.data;
      }
    } catch (err) {
      alert(err);
    }
  }
  return output;
};

export const deployHeroku = async (code: string, data: ConfigInter) => {
  try {
    let output: boolean = false;
    if (code && code !== '' && data) {
      const newData = convertToHeroku(code, data);
      const response = await deployToHeroku(newData);
      output = response;
    }
    return output;
  } catch (err) {
    throw err
  }
};


export const deployVercel = async (code: string, data: ConfigInter) => {
  try {
    let output: boolean = false;
    if (code && code !== '' && data) {
      const newData = convertToVercel(code, data);
      const response = await deployToVercel(newData);
      output = response;
    }
    return output;
  } catch (err) {
    throw err
  }
};

interface ConfigInter {
  app_backend_deploy_status: String;
  Product_id:string;
  id: string;
  ownerId: any;
  checked?: boolean;
  name?: string;
  projectName: string;
  displayName: string;
  logoRect: string;
  logoSquare: string;
  illustration: string;
  bg: string;
  AppID: string;
  primaryColor: string;
  frontEndURL: string;
  backEndURL: string;
  pstn: false;
  precall: false;

  chat: false;
  cloudRecording: false;
  screenSharing: false;
  APP_CERTIFICATE: string;
  CUSTOMER_ID: string;
  CUSTOMER_CERTIFICATE: string;
  BUCKET_NAME: string;
  BUCKET_ACCESS_KEY: string;
  BUCKET_ACCESS_SECRET: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URL: string;
  PSTN_USERNAME: string;
  PSTN_PASSWORD: string;
  HEADING: string;
  SUBHEADING: string;
  encryption: false;
  ENABLE_OAUTH: false;
  RECORDING_REGION: string;
  project_template: string;
}

const convertToqueryVariable = async (projectState: ConfigInter, title: String) => {
  const newData: ConfigInterface | any = {};
  if (projectState.id) {
    newData.id = projectState.id.toString();
  }
  newData.productId = projectState.Product_id;
  newData.project_template = projectState.project_template;
  newData.ownerId = projectState.ownerId;
  newData.agora_app_certificate = projectState.APP_CERTIFICATE;
  newData.agora_app_id = projectState.AppID;
  newData.agora_customer_certificate = projectState.CUSTOMER_CERTIFICATE;
  newData.agora_customer_id = projectState.CUSTOMER_ID;
  newData.chat = projectState.chat;
  newData.cloud_recording = projectState.cloudRecording;
  newData.description = projectState.SUBHEADING;
  newData.precall_screen = projectState.precall;
  newData.oauth_client_id = projectState.CLIENT_ID;
  newData.oauth_client_secret = projectState.CLIENT_SECRET
  newData.oauth_enabled = projectState.ENABLE_OAUTH
  if (
    projectState.illustration === '' ||
    projectState.illustration.includes('http')
  ) {
    newData.illustration_file = projectState.illustration;
  } else {
    newData.illustration_file = await uploadFile(
      1,
      dataURLtoFile(projectState.illustration, 'illustration.jpg'),
    );
  }

  if (projectState.bg === '' || projectState.bg.includes('http')) {
    newData.primary_bg_logo = projectState.bg;
  } else {
    newData.primary_bg_logo = await uploadFile(
      1,
      dataURLtoFile(projectState.bg, 'bg.jpg'),
    );
  }

  if (projectState.logoRect === '' || projectState.logoRect.includes('http')) {
    newData.primary_logo = projectState.logoRect;
  } else {
    newData.primary_logo = await uploadFile(
      1,
      dataURLtoFile(projectState.logoRect, 'logoRect.jpg'),
    );
  }

  if (
    projectState.logoSquare === '' ||
    projectState.logoSquare.includes('http')
  ) {
    newData.primary_square_logo = projectState.logoSquare;
  } else {
    newData.primary_square_logo = await uploadFile(
      1,
      dataURLtoFile(projectState.logoSquare, 'logoRect.jpg'),
    );
  }

  newData.primary_color = projectState.primaryColor;
  newData.pstn_dial_in = projectState.pstn;
  newData.pstn_turbo_bridge_name = projectState.PSTN_USERNAME;
  newData.pstn_turbo_bridge_password = projectState.PSTN_PASSWORD;
  newData.s3_bucket_access_key = projectState.BUCKET_ACCESS_KEY;
  newData.s3_bucket_access_secret = projectState.BUCKET_ACCESS_SECRET;
  newData.s3_bucket_name = projectState.BUCKET_NAME;
  newData.s3_bucket_region = projectState.RECORDING_REGION;
  newData.screen_share = projectState.screenSharing;
  newData.title = title !== '' ? title : projectState.HEADING;
  newData.video_encryption = projectState.encryption;
  return newData;
};

const convertToHeroku = (code: String, herokuState: ConfigInter) => {
  const newData: ConfigInterface | any = {
    code: code,
    project_id: herokuState.id,
    env: {
      SCHEME: herokuState.id,
      APP_ID: herokuState.AppID,
      APP_CERTIFICATE: herokuState.APP_CERTIFICATE,
      CUSTOMER_ID: herokuState.CUSTOMER_ID,
      CUSTOMER_CERTIFICATE: herokuState.CUSTOMER_CERTIFICATE,
      BUCKET_NAME: herokuState.BUCKET_NAME,
      BUCKET_ACCESS_KEY: herokuState.BUCKET_ACCESS_KEY,
      BUCKET_ACCESS_SECRET: herokuState.BUCKET_ACCESS_SECRET,
      CLIENT_ID: herokuState.ENABLE_OAUTH?herokuState.CLIENT_ID:"",
      CLIENT_SECRET: herokuState.ENABLE_OAUTH?herokuState.CLIENT_SECRET:"",
      PSTN_USERNAME: herokuState.PSTN_USERNAME,
      PSTN_PASSWORD: herokuState.PSTN_PASSWORD,
      ENABLE_OAUTH: herokuState.ENABLE_OAUTH?"1":"0",
      RECORDING_REGION: String(herokuState.RECORDING_REGION)
    },
  };
  return JSON.stringify(newData);
};

const convertToVercel = (code: String, varcelState: any) =>{
  const newData: ConfigInterface | any = {
    code: code,
    project_id: varcelState.id,
    configJson: {
      projectName: varcelState.Product_id,
      displayName: varcelState.HEADING,
      logoRect: varcelState.logoRect || "",
      logoSquare: varcelState.logoSquare ||"",
      illustration: "",
      bg: varcelState.bg,
      AppID: varcelState.AppID,
      primaryColor: varcelState.primaryColor,
      frontEndURL: '',
      backEndURL: varcelState.app_backend_url || "",
      pstn: varcelState.pstn,
      precall: varcelState.precall,
      watermark: "",
      chat: varcelState.chat,
      cloudRecording: varcelState.cloudRecording,
      screenSharing: varcelState.screenSharing,
      platformIos: true,
      platformAndroid: true,
      platformWeb: true,
      platformWindows: true,
      platformMac: false,
      platformLinux: false,
      APP_CERTIFICATE: varcelState.APP_CERTIFICATE,
      CUSTOMER_ID: varcelState.CUSTOMER_ID,
      CUSTOMER_CERTIFICATE: varcelState.CUSTOMER_CERTIFICATE,
      BUCKET_NAME: varcelState.BUCKET_NAME,
      BUCKET_ACCESS_KEY: varcelState.BUCKET_ACCESS_KEY,
      BUCKET_ACCESS_SECRET: varcelState.BUCKET_ACCESS_SECRET,
      CLIENT_ID: varcelState.CLIENT_ID || "",
      CLIENT_SECRET: varcelState.CLIENT_SECRET || "",
      REDIRECT_URL: "",
      PSTN_USERNAME: varcelState.PSTN_USERNAME,
      PSTN_PASSWORD: varcelState.PSTN_PASSWORD,
      HEADING: "Agora.io",
      SUBHEADING: varcelState.SUBHEADING,
      encryption: varcelState.encryption,
      ENABLE_OAUTH: varcelState.ENABLE_OAUTH,
      RECORDING_REGION: varcelState.RECORDING_REGION
  },
    packageJson:{
      "name": "agora-app-builder",
      "version": "1.0.0",
      "scripts": {
        "start": "app-builder-init",
        "start:info": "app-builder-init --info"
      },
      "keywords": [],
      "license": "MIT",
      "dependencies": {
        "agora-app-builder-cli": "0.0.10"
      }
    }
  };
  return JSON.stringify(newData);
}
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
};
