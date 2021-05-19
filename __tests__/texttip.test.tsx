import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {act} from '@testing-library/react';
import TextTip from '../components/textTip';
import {Tooltip} from '@material-ui/core';

describe('ProTip Tests', () => {
  it('should ProTip components render successfull or not', async () => {
    let wrapper: any;
    await act(async () => {
      wrapper = shallow(<TextTip name="test" tip="test tip"/>);
    });
    wrapper.update();
    expect(wrapper.find(Tooltip)).toHaveLength(1);
  });
});