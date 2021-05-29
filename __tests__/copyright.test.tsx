import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {act} from '@testing-library/react';
import Copyright from '../components/Copyright';
import {Typography} from '@material-ui/core';

describe('copyRight Tests', () => {
  it('should copyRight components render successfull or not', async () => {
    let wrapper: any;
    await act(async () => {
      wrapper = shallow(<Copyright />);
    });
    wrapper.update();
    expect(wrapper.find(Typography)).toHaveLength(1);
  });
});
