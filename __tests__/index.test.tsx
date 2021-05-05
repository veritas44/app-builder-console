import {mount} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {act} from '@testing-library/react';
// import { Link } from '@material-ui/core';
import {
  Snackbar,
  Card,
  Backdrop,
  Button,
  TextField
} from '@material-ui/core';
import App from '../pages/index';
// import {MockedProvider} from '@apollo/client/testing';
// import {projectList} from '../config/query';
// const mocks = [
//   {
//     request: {
//       query: projectList,
//       variables: {},
//     },
//     result: {
//       data: {
//         projects: [
//           {
//             agora_app_certificate: null,
//             agora_app_id: null,
//             agora_customer_certificate: null,
//             agora_customer_id: null,
//             app_backend_deploy_status: null,
//             app_backend_url: null,
//             chat: false,
//             cloud_recording: false,
//             createdAt: '2021-05-04T07:26:12.860Z',
//             description: 'Test Create Project',
//             id: 'cko9pjwqk7139m5nrf3f1irhb',
//             illustration_file: null,
//             ownerId: 1,
//             precall_screen: false,
//             primary_bg_logo: null,
//             primary_color: null,
//             primary_logo: null,
//             primary_square_logo: null,
//             pstn_dial_in: false,
//             pstn_turbo_bridge_name: null,
//             pstn_turbo_bridge_password: null,
//             s3_bucket_access_key: null,
//             s3_bucket_access_secret: null,
//             s3_bucket_name: null,
//             s3_bucket_region: null,
//             screen_share: false,
//             title: 'Nexus',
//             updatedAt: '2021-05-04T07:26:12.861Z',
//             video_encryption: false,
//           },
//         ],
//       },
//     },
//   },
// ];
// let someDataSet = {
//   data: {
//     projects: [
//       {
//         agora_app_certificate: null,
//         agora_app_id: null,
//         agora_customer_certificate: null,
//         agora_customer_id: null,
//         app_backend_deploy_status: null,
//         app_backend_url: null,
//         chat: false,
//         cloud_recording: false,
//         createdAt: '2021-05-04T07:26:12.860Z',
//         description: 'Test Create Project',
//         id: 'cko9pjwqk7139m5nrf3f1irhb',
//         illustration_file: null,
//         ownerId: 1,
//         precall_screen: false,
//         primary_bg_logo: null,
//         primary_color: null,
//         primary_logo: null,
//         primary_square_logo: null,
//         pstn_dial_in: false,
//         pstn_turbo_bridge_name: null,
//         pstn_turbo_bridge_password: null,
//         s3_bucket_access_key: null,
//         s3_bucket_access_secret: null,
//         s3_bucket_name: null,
//         s3_bucket_region: null,
//         screen_share: false,
//         title: 'Nexus',
//         updatedAt: '2021-05-04T07:26:12.861Z',
//         video_encryption: false,
//       },
//     ],
//   },
// };
describe('With Enzyme', () => {
  let wrapper: any;
  beforeEach(async () => {
    await act(async () => {
      wrapper = mount(<App />);
    });
  });
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it('Should render component', async () => {
    expect(wrapper.find(Snackbar)).toHaveLength(1);
    expect(wrapper.find(Backdrop)).toHaveLength(1);
    expect(wrapper.find(Card)).toHaveLength(1);
  });
  it('Should Click on Card component with text change', async () => {
    act(() => {
      wrapper.find(Card).at(0).props().onClick();
    });
    wrapper.update();
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(TextField)).toHaveLength(1);
    const event = {
      target: {
        name:'Project_Name',
        value: 'abc 123',
      },
    };
    await act(async () => {
        await wrapper.find(TextField).at(0).props().onChange(event);
    });
    wrapper.update();
    expect(wrapper.find(TextField).at(0).props().value).toEqual('abc 123');
    expect(wrapper.find(TextField).at(0).props().error).toEqual(false);
    // expect(onSearchMock).toBeCalledWith('the-value');
  });
  it('Validation Error In create project title', async () => {
    act(() => {
      wrapper.find(Card).at(0).props().onClick();
    });
    wrapper.update();
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(TextField)).toHaveLength(1);
    const event = {
      target: {
        name:'Project_Name',
        value: 'abc 123@',
      },
    };
    await act(async () => {
        await wrapper.find(TextField).at(0).props().onChange(event);
    });
    wrapper.update();
    expect(wrapper.find(TextField).at(0).props().value).toEqual('abc 123@');
    expect(wrapper.find(TextField).at(0).props().error).toEqual(true);
    // expect(onSearchMock).toBeCalledWith('the-value');
  });
});
