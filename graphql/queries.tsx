import {DocumentNode, gql} from '@apollo/client';

export const projectListQuery = (skip: number): DocumentNode => {
  return gql`
    query {
      projects {
        id
        product_name
        primary_background_logo
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

export const projectByIdQuery = gql`
  query projects($project_id: ID) {
    projects(project_id: $project_id) {
      id
      product_id
      product_name
      app_id
      app_certificate
      primary_color
      frontend_endpoint
      backend_endpoint
      pstn
      precall
      primary_logo
      primary_square_logo
      primary_background_logo
      chat
      cloud_recording
      screen_sharing
      encryption_enabled
      landing_sub_heading
      primary_font_color
      secondary_font_color
      sentry_dsn
      enable_google_oauth
      enable_apple_oauth
      enable_slack_oauth
      enable_microsoft_oauth
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
      customer_id
      customer_certificate
      bucket_name
      recording_region
      bucket_access_key
      bucket_access_secret
      pstn_email
      pstn_password
      pstn_account
      scheme
      video_profile
    }
  }
`;

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

export const getUserEmailQuery = (): DocumentNode => {
  return gql`
    query user {
      user {
        email
      }
    }
  `;
};
