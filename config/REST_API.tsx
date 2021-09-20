import {getToken} from '../graphql/apollo';
import {IProductInfoDefaultObj} from '../constants/productInfoDefaults';

const url = 'https://staging1.rteappbuilder.com/';

export const uploadFile = async ({
  productInfo,
  file,
}: {
  productInfo: IProductInfoDefaultObj;
  file: File | null;
}) => {
  console.log({formData}, {productInfo});
  let output: any = '';
  const formData = new FormData();
  for (let key in productInfo) {
    formData.append(key, productInfo[key]);
  }
  // if (file) {
  // formData.append('ownerId', String(userId));
  // formData.append('file', file);

  const requestOptions: any = {
    method: 'POST',
    body: formData,
    redirect: 'follow',
    headers: new Headers({
      Authorization: getToken(),
    }),
  };

  const response = await fetch(
    `${url}update?project=${productInfo.id}`,
    requestOptions,
  );
  if (response.status === 200) {
    const result = await response.text();
    if (result) {
      output = JSON.parse(result).url;
    }
  }
  // }
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
