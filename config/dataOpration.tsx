import { gql } from '@apollo/client';

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
}`;

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
    primary_logo
    primary_square_logo
    primary_bg_logo
    illustration_file
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
    ownerId
  }
}`;

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
    primary_logo
    primary_square_logo
    primary_bg_logo
    illustration_file
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
}`;

export const deleteProject = gql`
mutation ($id: Int!) {
  deleteProject(id: $id) {
    id
    title
  }
}`;