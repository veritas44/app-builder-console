import {DocumentNode, gql} from '@apollo/client';

export const projectList = (skip: number): DocumentNode => {
  return gql`
query {
  projects (orderBy: {updatedAt: desc},take:3,skip:${skip}){
    id
    createdAt
    title
    primary_bg_logo
  }
}
`;
};

export const listAgoraProjects = (): DocumentNode => {
  return gql`
    query listAgoraProjects {
      listAgoraProjects {
        app_id
        app_secret
        project_name
        vendor_id
      }
    }
  `;
};
export const allUsers = gql`
  query {
    allUsers {
      id
      name
      username
      projects {
        id
        createdAt
        updatedAt
        title
        description
        agora_app_id
        agora_customer_id
        agora_app_certificate
        agora_customer_certificate
        primary_color
        primary_logo
        primary_square_logo
        primary_bg_logo
        pstn_dial_in
        pstn_turbo_bridge_name
        pstn_turbo_bridge_password
        precall_screen
        chat
        cloud_recording
        screen_share
        video_encryption
        s3_bucket_region
        s3_bucket_name
        s3_bucket_access_key
        s3_bucket_access_secret
      }
    }
  }
`;

export const projectById = (id: string): DocumentNode => {
  return gql`
query {
  projectById(id: "${id}") {
    id
    productId
    createdAt
    updatedAt
    title
    project_template
    description
    agora_app_id
    agora_customer_id
    agora_app_certificate
    agora_customer_certificate
    primary_color
    primary_font_color
    secondary_font_color
    primary_logo
    primary_square_logo
    primary_bg_logo
    pstn_dial_in
    pstn_turbo_bridge_email
    pstn_turbo_bridge_account
    pstn_turbo_bridge_password
    google_client_id
    google_client_secret
    microsoft_client_id
    microsoft_client_secret
    slack_client_id
    slack_client_secret
    apple_client_id
    apple_private_key
    apple_key_id
    apple_team_id
    precall_screen
    chat
    cloud_recording
    screen_share
    video_encryption
    s3_bucket_region
    s3_bucket_name
    s3_bucket_access_key
    s3_bucket_access_secret
    app_frontend_deploy_status
    app_frontend_url
    app_backend_url
    app_backend_deploy_status
    app_backend_deploy_msg
    enable_google_oauth
    enable_slack_oauth
    enable_microsoft_oauth
    enable_apple_oauth
  }
}`;
};

export const projectByProductId = (id: string): DocumentNode => {
  return gql`
  query {
    projectByProductId (productId:"${id}"){
      productId
    }
  }
  `;
};
export const projectByIdPooling = (id: String): DocumentNode => {
  return gql`
query {
  projectById(id: "${id}") {
    id
    app_backend_url
    app_backend_deploy_status
    app_backend_deploy_msg,
    app_frontend_deploy_status
    app_frontend_url
  }
}`;
};

export const getUserEmail = (): DocumentNode => {
  return gql`
    query getUserEmail {
      getUserEmail {
        email
        id
      }
    }
  `;
};
