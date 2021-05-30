import {gql} from '@apollo/client';

export const userCreateInput = gql`
  mutation ($data: UserCreateInput!) {
    signupUser(data: $data) {
      id
      name
      username
      projects {
        id
        createdAt
        updatedAt
        title
        ownerId
      }
    }
  }
`;

export const projectCreateInput = gql`
  mutation ($data: ProjectCreateInput!) {
    createProject(data: $data) {
      id
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
      pstn_turbo_bridge_password
      pstn_turbo_bridge_account
      precall_screen
      chat
      cloud_recording
      screen_share
      video_encryption
      s3_bucket_region
      s3_bucket_name
      s3_bucket_access_key
      s3_bucket_access_secret
      enable_google_oauth
      enable_slack_oauth
      enable_microsoft_oauth
      enable_apple_oauth
    }
  }
`;

export const updateProject = gql`
  mutation ($data: ProjectUpdateInput!) {
    updateProject(data: $data) {
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
      primary_font_color
      secondary_font_color
      primary_logo
      primary_square_logo
      primary_bg_logo
      pstn_dial_in
      pstn_turbo_bridge_email
      pstn_turbo_bridge_password
      pstn_turbo_bridge_account
      precall_screen
      chat
      cloud_recording
      screen_share
      video_encryption
      s3_bucket_region
      s3_bucket_name
      s3_bucket_access_key
      s3_bucket_access_secret
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
      enable_google_oauth
      enable_slack_oauth
      enable_microsoft_oauth
      enable_apple_oauth
    }
  }
`;

export const deleteProject = gql`
  mutation ($id: String!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export const createAgoraProject = gql`
  mutation createAgoraProject($name: String!) {
    createAgoraProject(name: $name) {
      app_id
      app_secret
      project_name
      vendor_id
    }
  }
`;
