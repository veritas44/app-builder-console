export interface IProductInfoDefaultObj {
    app_frontend_url: string;
    Product_id: string;
    app_backend_deploy_status: any;
    app_backend_url: string;
    app_backend_deploy_msg: string;
    id: string | any;
    ownerId: number;
    checked?: boolean;
    name?: string;
    projectName: string;
    displayName: string;
    logoRect: string | File;
    logoSquare: string | File;
    bg: string | File;
    AppID: string;
    primaryColor: string;
    primaryFontColor: string;
    secondaryFontColor: string;
    frontEndURL: string;
    backEndURL: string;
    pstn: false;
    precall: boolean;
    project_template?: String;
    chat: boolean;
    cloudRecording: false;
    screenSharing: boolean;
    APP_CERTIFICATE: string;
    CUSTOMER_ID: string;
    CUSTOMER_CERTIFICATE: string;
    BUCKET_NAME: string;
    BUCKET_ACCESS_KEY: string;
    BUCKET_ACCESS_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    MICROSOFT_CLIENT_ID: string;
    MICROSOFT_CLIENT_SECRET: string;
    SLACK_CLIENT_ID: string;
    SLACK_CLIENT_SECRET: string;
    APPLE_CLIENT_ID: string;
    APPLE_KEY_ID: string;
    APPLE_PRIVATE_KEY: string;
    APPLE_TEAM_ID: string;
    REDIRECT_URL: string;
    PSTN_EMAIL: string;
    PSTN_PASSWORD: string;
    PSTN_ACCOUNT: string;
    HEADING: string;
    SUBHEADING: string;
    encryption: false;
    ENABLE_GOOGLE_OAUTH: false;
    ENABLE_MICROSOFT_OAUTH: boolean;
    ENABLE_SLACK_OAUTH: boolean;
    ENABLE_APPLE_OAUTH: boolean;
    RECORDING_REGION: string;
    sentry_dsn: string;
  }
  
export const productInfoDefaultObj: IProductInfoDefaultObj = {
    id: '',
    Product_id: '',
    ownerId: 1,
    projectName: '',
    displayName: '',
    logoRect: '',
    logoSquare: '',
    bg: '',
    AppID: '',
    primaryColor: '#099DFD',
    primaryFontColor: '#363636',
    secondaryFontColor: '#FFFFFF',
    frontEndURL: '',
    backEndURL: '',
    pstn: false,
    precall: true,
    chat: true,
    cloudRecording: false,
    screenSharing: true,
    APP_CERTIFICATE: '',
    CUSTOMER_ID: '',
    CUSTOMER_CERTIFICATE: '',
    BUCKET_NAME: '',
    BUCKET_ACCESS_KEY: '',
    BUCKET_ACCESS_SECRET: '',
    GOOGLE_CLIENT_ID: '',
    GOOGLE_CLIENT_SECRET: '',
    MICROSOFT_CLIENT_ID: '',
    MICROSOFT_CLIENT_SECRET: '',
    SLACK_CLIENT_ID: '',
    SLACK_CLIENT_SECRET: '',
    APPLE_CLIENT_ID: '',
    APPLE_KEY_ID: '',
    APPLE_PRIVATE_KEY: '',
    APPLE_TEAM_ID: '',
    REDIRECT_URL: '',
    PSTN_EMAIL: '',
    PSTN_PASSWORD: '',
    PSTN_ACCOUNT: '',
    HEADING: 'Acme Conferencing',
    SUBHEADING: 'Where business happens online, on time, each time.',
    encryption: false,
    ENABLE_GOOGLE_OAUTH: false,
    ENABLE_MICROSOFT_OAUTH: false,
    ENABLE_SLACK_OAUTH: false,
    ENABLE_APPLE_OAUTH: false,
    RECORDING_REGION: '0',
    app_frontend_url: '',
    app_backend_deploy_status: '',
    app_backend_url: '',
    app_backend_deploy_msg: '',
    sentry_dsn: '',
  };

export const productInfoDefaultErrorObj = {
    ProductInformation: {
      ProductName: '',
      ProductId: '',
      ProductDesc: '',
    },
    AgoraConfiguration: {
      AgoraID: '',
      AgoraCertificate: '',
    },
    JoinScreen: {
      Oauth: false,
      ClientID: '',
      ClientSecret: '',
    },
    ConferencingScreen: {
      PSTN: {
        TEmail: '',
        TPassword: '',
      },
      Cloud: {
        CustomerID: '',
        CustomerCertificate: '',
        BucketName: '',
        BucketAccessKey: '',
        BucketAccessSecret: '',
      },
    },
  }
