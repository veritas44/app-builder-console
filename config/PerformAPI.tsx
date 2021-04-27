import client from "../config/apollo";
import { projectList, projectById } from '../config/query';
import { projectCreateInput, updateProject } from "./dataOpration";
import { uploadFile, deployToHeroku } from "./REST_API";

export const getprojectsList = async () => {
    let output: any = false;
    const response = await client.query({ query: projectList });
    if (response.data) {
        output = response.data;
    }
    return output;
}

export const getprojectById = async (id: number) => {
    let output: any = false;
    if (id !== null && id > 0) {
        const response = await client.query({ query: projectById(id) });
        if (response.data) {
            output = response.data;
        }
    }
    return output;
}

export const createProjectData = async (data: any, title: String) => {
    let output: any = false;
    if (data) {
        const newData: any = await convertToqueryVariable(data, title);
        const response = await client.mutate({ mutation: projectCreateInput, variables: { data: newData } });
        if (response.data) {
            output = response.data;
        }
    }
    return output;
}

export const updateProjectData = async (data: any) => {
    let output: any = false;
    if (data) {
        debugger;
        const newData: any = await convertToqueryVariable(data, "");
        const response = await client.mutate({ mutation: updateProject, variables: { data: newData } });
        if (response.data) {
            output = response.data;
        }
    }
    return output;
}

export const deployHeroku = async (code: string, data: any) => {
    let output: any = false;
    if (code && code !== "" && data) {
        const newData = convertToHeroku(code, data)
        const response = await deployToHeroku(newData);
        output = response;
    }
    return output;
};

const convertToqueryVariable = async (projectState: any, title: String) => {
    const newData: any = {};
    if (projectState.id) {
        newData.id = projectState.id;
    }
    newData.ownerId = projectState.ownerId;
    newData.agora_app_certificate = projectState.APP_CERTIFICATE;
    newData.agora_app_id = projectState.AppID;
    newData.agora_customer_certificate = projectState.CUSTOMER_CERTIFICATE;
    newData.agora_customer_id = projectState.CUSTOMER_ID;
    newData.chat = projectState.chat;
    newData.cloud_recording = projectState.cloudRecording;
    newData.description = projectState.SUBHEADING;
    newData.precall_screen = projectState.precall;

    if (projectState.illustration === "" || projectState.illustration.includes("http")) {
        newData.illustration_file = projectState.illustration;
    } else {
        newData.illustration_file = await uploadFile(projectState.illustration, dataURLtoFile(projectState.illustration, "illustration.jpg"));
    }

    if (projectState.bg === "" || projectState.bg.includes("http")) {
        newData.primary_bg_logo = projectState.bg;
    } else {
        newData.primary_bg_logo = await uploadFile(projectState.ownerId, dataURLtoFile(projectState.bg, "bg.jpg"));
    }

    if (projectState.logoRect === "" || projectState.logoRect.includes("http")) {
        newData.primary_logo = projectState.logoRect;
    } else {
        newData.primary_logo = await uploadFile(projectState.ownerId, dataURLtoFile(projectState.logoRect, "logoRect.jpg"));
    }

    if (projectState.logoSquare === "" || projectState.logoSquare.includes("http")) {
        newData.primary_square_logo = projectState.logoSquare;
    } else {
        newData.primary_square_logo = await uploadFile(projectState.ownerId, dataURLtoFile(projectState.logoSquare, "logoRect.jpg"));
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
    newData.title = title !== "" ? title : projectState.HEADING;
    newData.video_encryption = projectState.encryption;
    return newData;
}

const convertToHeroku = (code: String, herokuState: any) => {
    const newData: any = {
        code: code,
        project_id: herokuState.id,
        env: {
            // SCHEME: "",
            // APP_ID: herokuState.AppID,
            // APP_CERTIFICATE: herokuState.APP_CERTIFICATE,
            // CUSTOMER_ID: herokuState.CUSTOMER_ID,
            // CUSTOMER_CERTIFICATE: herokuState.CUSTOMER_CERTIFICATE,
            // BUCKET_NAME: herokuState.BUCKET_NAME,
            // BUCKET_ACCESS_KEY: herokuState.BUCKET_ACCESS_KEY,
            // BUCKET_ACCESS_SECRET: herokuState.BUCKET_ACCESS_SECRET,
            // CLIENT_ID: "",
            // CLIENT_SECRET: "",
            // PSTN_USERNAME: herokuState.PSTN_USERNAME,
            // PSTN_PASSWORD: herokuState.PSTN_PASSWORD,
            // ENABLE_OAUTH: false,
            // RECORDING_REGION: Number(herokuState.RECORDING_REGION)
        }
    }
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
}