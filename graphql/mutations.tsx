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

export const createNewProjectMutation = gql`
  mutation createProject($product_name: String!, $preset: ProjectPreset!) {
    createProject(product_name: $product_name, preset: $preset) {
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

export const updateProjectMutation = gql`
  mutation ($updated_project: ProjectInput!) {
    updateProject(updated_project: $updated_project) {
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
      project_template
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
