export const dataURLtoFile = (dataUrl: string, name: string) => {
    var arr: string[] | Array<any> = dataUrl.split(','),
      mime = arr && arr[0].match(/:(.*?);/)[1];
      return (fetch(dataUrl)
        .then(function(res){return res.blob();})
        .then(function(buf){return new File([buf], `${name}.${mime.split("/")[1]}`, {type:mime});})
    );
  };

  // check if image file ext exist or not of image cloud front url
  export const checkFileExt = (fileUrl: string) => {
   const splitFileUrl = fileUrl.split("/");
    if(splitFileUrl[splitFileUrl.length - 1].lastIndexOf(".") < 0) return false;
    return true;
  }