import {getToken} from './apollo';
const url = 'http://agoraappbuilder.com';

export const uploadFile = async (userId: number, file: File) => {
  let output: any = false;
  if (file) {
    const formData = new FormData();
    formData.append('ownerId', String(userId));
    formData.append('file', file);

    const requestOptions: any = {
      method: 'POST',
      body: formData,
      redirect: 'follow',
      headers: new Headers({
        Authorization: getToken(),
      }),
    };

    const response = await fetch(`${url}/api/file/upload`, requestOptions);
    if (response.status === 200) {
      const result = await response.text();
      if (result) {
        output = JSON.parse(result).url;
      }
    }
  }
  return output;
};

export const deployToHeroku = async (data: string) => {
  let output: any = false;
  if (data !== '') {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', getToken());
    const requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow',
    };
    // fetch(`${url}/api/file/deploy/heroku`, requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     debugger;
    //     console.log(data);
    //   });
    let response: any = await fetch(
      `${url}/api/file/deploy/heroku`,
      requestOptions,
    );
    if (response.status === 200) {
      const result = await response.text();
      if (result) {
        output = JSON.parse(result);
      }
    } else {
      response = await response.json();
      throw response.message;
    }
  }
  return output;
};

export const deployToVercel = async (data: any) => {
  let output: any = false;
  if (data !== '') {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', getToken());
    const requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow',
    };
    // fetch(`${url}/api/file/deploy/heroku`, requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     debugger;
    //     console.log(data);
    //   });
    let response: any = await fetch(
      `${url}/api/file/deploy/vercel`,
      requestOptions,
    );
    if (response.status === 200) {
      const result = await response.text();
      if (result) {
        output = JSON.parse(result);
      }
    } else {
      response = await response.json();
      throw response.message;
    }
  }
  return output;
};
