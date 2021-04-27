export const uploadFile = async (userId: number, file: File) => {
    let output: any = false;
    if (file) {
        const formData = new FormData();
        formData.append("userId", String(userId));
        formData.append("file", file);

        const requestOptions: any = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };

        const response = await fetch("https://2e458b918571.ngrok.io/api/file/upload", requestOptions);
        if (response.status === 200) {
            const result = await response.text();
            if (result) {
                output = JSON.parse(result).url;
            }
        }
    }
    return output;
}

export const deployToHeroku = async (data: string) => {
    let output: any = false;
    if (data !== "") {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions: any = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        const response = await fetch("https://2e458b918571.ngrok.io/api/file/deploy/heroku", requestOptions);
        if (response.status === 200) {
            const result = await response.text();
            if (result) {
                output = JSON.parse(result);
            }
        }
    }
    return output;
}