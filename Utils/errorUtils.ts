export interface IErrorObj {
  isErrorInConferencingScreen: boolean;
  conferencingCred?: {pstn: {}; cloud: {}};
  isErrorInAuthCred: boolean;
  authCred?: {apple: {}; google: {}; slack: {}; microsoft: {}};
  isProductInfoError: boolean;
  productInfo?: {};
}
export const strValidation = (regex: RegExp, value: string) => {
  return regex.test(value);
};
const generalInfoValidation = ({dataToValidate, errorObj}) => {
  let isProductInfoError = false;
  let errors = {};
  console.log('{general infor validation}', {dataToValidate}, {errors});
  if (
    !(
      dataToValidate.product_name &&
      strValidation(/^[A-Za-z0-9 ]+$/, dataToValidate.product_name)
    )
  ) {
    isProductInfoError = true;
    errors = {
      ...errors,
      product_name: 'Product Name should alphabetical or numerical value.',
    };
  }

  // if (!dataToValidate.Product_id) {
  //     isErrorInGeneralInfo = true;
  //     errorObject.ProductInformation.ProductId =
  //         'Product ID is a required field';
  // }
  // if (dataToValidate.Product_id && reservedNames.includes(dataToValidate.Product_id.toLowerCase())) {
  //     isErrorInGeneralInfo = true;
  //     errorObject.ProductInformation.ProductId = `${dataToValidate.Product_id} is reserved please try using another keyword`;
  // }
  if (!dataToValidate.landing_sub_heading) {
    isProductInfoError = true;
    errors = {
      ...errors,
      landing_sub_heading: 'Product Description is a required field',
    };
  }

  return {
    isProductInfoError,
    productInfo: errors,
  };
};

const joinScreenValidation = ({dataToValidate, errorObj}) => {
  let isErrorInAuthCred = false;
  let errors = {apple: {}, google: {}, slack: {}, microsoft: {}};

  // "customer_id": "",
  // "customer_certificate": "",
  console.log(
    '{joinScreenValidation infor validation}',
    {dataToValidate},
    {errorObj},
  );

  // microsoft auth cred validation
  if (dataToValidate.enable_microsoft_oauth) {
    if (!dataToValidate.microsoft_client_id) {
      //   setJoinScrErr(() => true);
      errors = {
        ...errors,
        microsoft: {
          ...errors.microsoft,
          microsoft_client_id: 'Microsoft OAuth Client ID is a required field',
        },
      };
      isErrorInAuthCred = true;
    }
    if (!dataToValidate.microsoft_client_secret) {
      //   setJoinScrErr(() => true);
      errors = {
        ...errors,
        microsoft: {
          ...errors.microsoft,
          microsoft_client_secret:
            'Microsoft OAuth Client secret is a required field',
        },
      };

      isErrorInAuthCred = true;
    }
  }

  // slack auth cred validation
  if (dataToValidate.enable_slack_oauth) {
    if (!dataToValidate.slack_client_id) {
      errors = {
        ...errors,
        slack: {
          ...errors.slack,
          slack_client_id: 'Slack OAuth Client ID is a required field',
        },
      };

      isErrorInAuthCred = true;
    }
    if (!dataToValidate.slack_client_secret) {
      //   setJoinScrErr(() => true);
      errors = {
        ...errors,
        slack: {
          ...errors.slack,
          slack_client_secret: 'Slack OAuth Client ID is a required field',
        },
      };

      isErrorInAuthCred = true;
    }
  }

  // google auth cred validation
  if (dataToValidate.enable_google_oauth) {
    if (!dataToValidate.google_client_id) {
      //   setJoinScrErr(() => true);
      console.log(
        errorObj,
        errorObj.authcred,
        errorObj['authCred'],
        errorObj['authCred'].google,
        errorObj['authCred']['google'],
      );
      console.log(errorObj['authCred']['google'], 'google auth');
      errors = {
        ...errors,
        google: {
          ...errors.google,
          google_client_id: 'Google OAuth Client ID is a required field',
        },
      };

      isErrorInAuthCred = true;
    }
    if (!dataToValidate.google_client_secret) {
      //   setJoinScrErr(() => true);
      errors = {
        ...errors,
        google: {
          ...errors.google,
          google_client_secret:
            'Google OAuth Client secret is a required field',
        },
      };

      isErrorInAuthCred = true;
    }
  }
  // Apple auth cred validation
  if (dataToValidate.enable_apple_oauth) {
    if (!dataToValidate.apple_client_id) {
      //   setJoinScrErr(() => true);
      errors = {
        ...errors,
        apple: {
          ...errors.apple,
          apple_client_id: 'Apple OAuth Client ID is a required field',
        },
      };

      isErrorInAuthCred = true;
    }
    if (!dataToValidate.apple_private_key) {
      //   setJoinScrErr(() => true);
      errors = {
        ...errors,
        apple: {
          ...errors.apple,
          apple_private_key: 'Apple OAuth private key is a required field',
        },
      };

      isErrorInAuthCred = true;
    }
    if (!dataToValidate.apple_key_id) {
      //   setJoinScrErr(() => true);
      errors = {
        ...errors,
        apple: {
          ...errors.apple,
          apple_key_id: 'Apple OAuth key ID is a required field',
        },
      };

      isErrorInAuthCred = true;
    }

    if (!dataToValidate.apple_team_id) {
      //   setJoinScrErr(() => true);
      errors = {
        ...errors,
        apple: {
          ...errors.apple,
          apple_team_id: 'Apple OAuth team ID is a required field',
        },
      };
      isErrorInAuthCred = true;
    }
  }
  console.log(
    '{joinScreenValidation after validation}',
    {dataToValidate},
    {errorObj},
  );

  return {
    isErrorInAuthCred,
    authCred: errors,
  };
};

const conferencingScreenValidation = ({dataToValidate, errorObj}) => {
  let isErrorInConferencingScreen = false;
  let errors = {
    pstn: {},
    cloud: {},
  };
  console.log(
    '{conferencingScreenValidation before validation}',
    {dataToValidate},
    {errorObj},
  );

  if (dataToValidate.pstn) {
    if (!dataToValidate.pstn_email) {
      //   setConferenceErr(() => true);
      errors = {
        ...errors,
        pstn: {
          ...errors.pstn,
          pstn_email: 'Turbobridge Email is a required field',
        },
      };
      isErrorInConferencingScreen = true;
    }
    if (!dataToValidate.pstn_password) {
      //   setConferenceErr(() => true);
      errors = {
        ...errors,
        pstn: {
          ...errors.pstn,
          pstn_password: 'Turbobridge Password is a required field',
        },
      };

      isErrorInConferencingScreen = true;
    }
    if (!dataToValidate.pstn_account) {
      //   setConferenceErr(() => true);
      errors = {
        ...errors,
        pstn: {
          ...errors.pstn,
          pstn_account: 'Turbobridge Account is a required field',
        },
      };

      isErrorInConferencingScreen = true;
    }
  }
  if (dataToValidate.cloud_recording) {
    if (!dataToValidate.customer_id) {
      //   setConferenceErr(() => true);
      errors = {
        ...errors,
        cloud: {
          ...errors.cloud,
          customer_id: 'Agora Customer ID is a required field',
        },
      };

      isErrorInConferencingScreen = true;
    }
    if (!dataToValidate.customer_certificate) {
      //   setConferenceErr(() => true);
      errors = {
        ...errors,
        cloud: {
          ...errors.cloud,
          customer_certificate:
            'Agora Customer Certificate is a required field',
        },
      };

      isErrorInConferencingScreen = true;
    }
    if (
      !dataToValidate.bucket_name &&
      /^$|^[A-Za-z0-9]+$/.test(dataToValidate.bucket_name)
    ) {
      //   setConferenceErr(() => true);
      errors = {
        ...errors,
        cloud: {
          ...errors.cloud,
          bucket_name:
            '​AWS S3 Bucket Name is a required field and can contain only alpha-numerical characters',
        },
      };

      isErrorInConferencingScreen = true;
    }
    if (!dataToValidate.bucket_access_key) {
      //   setConferenceErr(() => true);
      errors = {
        ...errors,
        cloud: {
          ...errors.cloud,
          bucket_access_key: '​AWS S3 Bucket Access Key is a required field',
        },
      };

      isErrorInConferencingScreen = true;
    }
    if (!dataToValidate.bucket_access_secret) {
      //   setConferenceErr(() => true);
      errors = {
        ...errors,
        cloud: {
          ...errors.cloud,
          bucket_access_secret:
            '​AWS S3 Bucket Access Secret is a required field',
        },
      };
      isErrorInConferencingScreen = true;
    }
  }
  console.log(
    '{conferencingScreenValidation after validation}',
    {dataToValidate},
    {errorObj},
  );

  return {
    isErrorInConferencingScreen,
    conferencingCred: errors,
  };
};

export const tempErrorObject = {
  // general
  productInfo: {
    product_name: '',
    product_id: '',
    landing_sub_heading: '',
  },
  // app features, Authentication and conferencing related errors
  agoraConfiguration: {
    AgoraID: '',
    AgoraCertificate: '',
  },
  authCred: {
    apple: {},
    google: {},
    microsoft: {},
    slack: {},
  },
  conferencingCred: {
    pstn: {
      pstn_email: '',
      pstn_password: '',
      pstn_account: '',
    },
    cloud: {
      customer_id: '',
      customer_certificate: '',
      bucket_name: '',
      bucket_access_key: '',
      bucket_access_secret: '',
    },
  },
  isProductInfoError: false,
  isErrorInConferencingScreen: false,
  isErrorInAuthCred: false,
};
export const validateBeforeSaving = ({dataToValidate, errorObj}) => {
  // Product's general info validation, name, desc etc...
  //   console.log('inside validation', {
  //   generalInfoValidation({dataToValidate, errorObj});
  //   joinScreenValidation({dataToValidate, errorObj});
  //   conferencingScreenValidation({dataToValidate, errorObj});
  //   return errorObj;
  //   });
  return {
    ...generalInfoValidation({dataToValidate, errorObj}),
    ...joinScreenValidation({dataToValidate, errorObj}),
    ...conferencingScreenValidation({dataToValidate, errorObj}),
  };
};
