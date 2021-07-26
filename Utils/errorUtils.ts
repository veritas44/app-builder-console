const generalInfoValidation = ({ dataToValidate, errorObject }) => {
    let isErrorInGeneralInfo  = false;
    if (!dataToValidate.SUBHEADING) {
        isErrorInGeneralInfo = true;
        errorObject.ProductInformation.ProductDesc =
        'Product Description is a required field';
    }
    if (!dataToValidate.Product_id) {
        isErrorInGeneralInfo = true;
        errorObject.ProductInformation.ProductId =
            'Product ID is a required field';
    } 
    if (dataToValidate.Product_id && reservedNames.includes(dataToValidate.Product_id.toLowerCase())) {
        isErrorInGeneralInfo = true;
        errorObject.ProductInformation.ProductId = `${dataToValidate.Product_id} is reserved please try using another keyword`;
    } 
    if (!(dataToValidate.HEADING && strValidation(/^[A-Za-z0-9 ]+$/, dataToValidate.HEADING))) {
        isErrorInGeneralInfo = true;
        errorObject.ProductInformation.ProductName =
        'Product Name should alphabetical or numerical value.';
    }
    return {
        isErrorInGeneralInfo,
        errorObject
    }
}

const joinScreenValidation = ({ dataToValidate, errorObject}) => {
    let isErrorJoinScreen  = false;

    if (dataToValidate.ENABLE_GOOGLE_OAUTH) {
        if (!dataToValidate.GOOGLE_CLIENT_ID) {
        //   setJoinScrErr(() => true);
          errorObject.JoinScreen.ClientID =
            'Google OAuth Client ID is a required field';
            isErrorJoinScreen = true;
        }
        if (!dataToValidate.GOOGLE_CLIENT_SECRET) {
        //   setJoinScrErr(() => true);
          errorObject.JoinScreen.ClientSecret =
            'Google OAuth Client secret is a required field';
            isErrorJoinScreen = true;
        }
    }
    return {
        isErrorJoinScreen,
        errorObject
    }
}

const conferencingScreenValidation = ({ dataToValidate, errorObject }) => {
    let isErrorInConferencingScreen  = false;

    if (dataToValidate.pstn) {
        if (!dataToValidate.PSTN_EMAIL) {
        //   setConferenceErr(() => true);
          errorObject.ConferencingScreen.PSTN.TEmail =
            'Turbobridge Email is a required field';
            isErrorInConferencingScreen = true;
        }
        if (!dataToValidate.PSTN_PASSWORD) {
        //   setConferenceErr(() => true);
          errorObject.ConferencingScreen.PSTN.TPassword =
            'Turbobridge Password is a required field';
            isErrorInConferencingScreen = true;
        }
    } 
    if (dataToValidate.cloudRecording) {
        if (!dataToValidate.CUSTOMER_ID) {
        //   setConferenceErr(() => true);
            errorObject.ConferencingScreen.Cloud.CustomerID =
            'Agora Customer ID is a required field';
            isErrorInConferencingScreen = true;
        }
        if (!dataToValidate.CUSTOMER_CERTIFICATE) {
        //   setConferenceErr(() => true);
            errorObject.ConferencingScreen.Cloud.CustomerCertificate =
            'Agora Customer Certificate is a required field';
            isErrorInConferencingScreen = true;
        }
        if (!dataToValidate.BUCKET_NAME && /^$|^[A-Za-z0-9]+$/.test(dataToValidate.BUCKET_NAME)) {
        //   setConferenceErr(() => true);
            errorObject.ConferencingScreen.Cloud.BucketName =
            '​AWS S3 Bucket Name is a required field and can contain only alpha-numerical characters';
            isErrorInConferencingScreen = true;
        }
        if (!dataToValidate.BUCKET_ACCESS_KEY) {
        //   setConferenceErr(() => true);
            errorObject.ConferencingScreen.Cloud.BucketAccessKey =
            'AWS S3 Bucket Access Key is a required field';
            isErrorInConferencingScreen = true;
        }
        if (!dataToValidate.BUCKET_ACCESS_SECRET) {
        //   setConferenceErr(() => true);
            errorObject.ConferencingScreen.Cloud.BucketAccessSecret =
            'AWS S3 Bucket Access Secret is a required field';
            isErrorInConferencingScreen = true;
        }
    }

    return {
        isErrorInConferencingScreen,
        errorObject
    }

}
const validateBeforeSaving = ({ dataToValidate, errorObject}) => {

    // Product's general info validation, name, desc etc...
    generalInfoValidation({ dataToValidate, errorObject }) 
    joinScreenValidation({ dataToValidate, errorObject }) 
    conferencingScreenValidation({ dataToValidate, errorObject }) 

}