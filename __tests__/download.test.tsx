import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {act} from '@testing-library/react';
import Download from '../components/Download';
import {Button} from '@material-ui/core';
import type { FormState } from '../pages/console';
describe('copyRight Tests', () => {
  it('should copyRight components render successfull or not', async () => {
    let wrapper: any;
    let configData = {
        APP_CERTIFICATE:"",
        AppID:"",
    } as FormState
    await act(async () => {
      wrapper = shallow(<Download configData={configData} />);
    });
    wrapper.update();
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).at(0).props().disabled).toEqual(true);
  });
  it('Btn should enabled', async () => {
    let wrapper: any;
    let configData = {
        APP_CERTIFICATE:"123",
        AppID:"123",
        logoSquare:"",
        logoRect:"",
        illustration:"",
        bg:""
    } as FormState
    await act(async () => {
      wrapper = shallow(<Download configData={configData} />);
    });
    wrapper.update();
    expect(wrapper.find(Button).at(0).props().disabled).toEqual(false);
    await act(async () => {
        await wrapper.find(Button).props().onClick();
    });
    wrapper.update();
  });
});
