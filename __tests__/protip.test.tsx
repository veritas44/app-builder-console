import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {act} from '@testing-library/react';
import ProTip from '../components/ProTip';
import {Typography} from '@material-ui/core';

describe('ProTip Tests', () => {
  it('should ProTip components render successfull or not', async () => {
    let wrapper: any;
    await act(async () => {
      wrapper = shallow(<ProTip />);
    });
    wrapper.update();
    expect(wrapper.find(Typography)).toHaveLength(1);
  });
});
