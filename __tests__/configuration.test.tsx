import {mount} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {act} from '@testing-library/react';
import Configuration from '../components/Configuration';
import {TextField} from '@material-ui/core';
describe('ColorFont tests', () => {
  // let wrapper: any;
  const mockFnonClickBack = jest.fn();
  const mockFnsetErrorHandler = jest.fn();
  const mockFnhandleValueChange = jest.fn();
  let value: any = {
    AppID: '',
    APP_CERTIFICATE: '',
  };
  it('Should Check Error TextField Exist or not', async () => {
    let wrapper:any;
    let errorHandler = {
      AgoraConfiguration: {
        AgoraID: '',
        AgoraCertificate: '',
      },
    };
    await act(async () => {
       wrapper = mount(
        <Configuration
          value={value}
          onClickBack={mockFnonClickBack}
          handleValueChange={mockFnhandleValueChange}
          setErrorHandler={mockFnsetErrorHandler}
          errorHandler={errorHandler}
        />,
      );
    });
    expect(wrapper.find(TextField)).toHaveLength(2);
  });
  it('Should Change Event', async () => {
    let wrapper:any;
    let errorHandler = {
      AgoraConfiguration: {
        AgoraID: '',
        AgoraCertificate: '',
      },
    };
    await act(async () => {
      wrapper = mount(
        <Configuration
          value={value}
          onClickBack={mockFnonClickBack}
          handleValueChange={mockFnhandleValueChange}
          setErrorHandler={mockFnsetErrorHandler}
          errorHandler={errorHandler}
        />,
      );
    });
    let event = {
      target: {
        name: 'AppID',
        value: '123',
      },
    } as React.ChangeEvent<HTMLInputElement>;
    await act(async () => {
      await wrapper.find(TextField).at(0).props().onChange(event);
    });
    wrapper.update();
    expect(mockFnhandleValueChange).toBeCalledWith(event);
    expect(wrapper.find(TextField).at(0).props().error).toEqual(false);
    expect(wrapper.find(TextField).at(0).props().helperText).toEqual('');
    event = {
      target: {
        name: 'APP_CERTIFICATE',
        value: '123',
      },
    } as React.ChangeEvent<HTMLInputElement>;
    await act(async () => {
      await wrapper.find(TextField).at(1).props().onChange(event);
    });
    wrapper.update();
    expect(mockFnhandleValueChange).toBeCalledWith(event);
    expect(wrapper.find(TextField).at(1).props().error).toEqual(false);
    expect(wrapper.find(TextField).at(1).props().helperText).toEqual('');
  });

  it('should check error in textField', async () =>{
    let wrapper:any;
    let errorHandler = {
      AgoraConfiguration: {
        AgoraID: 'Agora App ID is required field',
        AgoraCertificate: 'Agora App Certificate is required field',
      },
    }
    await act(async () => {
      wrapper = mount(
        <Configuration
          value={value}
          onClickBack={mockFnonClickBack}
          handleValueChange={mockFnhandleValueChange}
          setErrorHandler={mockFnsetErrorHandler}
          errorHandler={errorHandler}
        />,
      );
    });
    wrapper.update();
    expect(wrapper.find(TextField).at(0).props().error).toEqual(true);
    expect(wrapper.find(TextField).at(0).props().helperText).toEqual('Agora App ID is required field');
    expect(wrapper.find(TextField).at(1).props().error).toEqual(true);
    expect(wrapper.find(TextField).at(1).props().helperText).toEqual('Agora App Certificate is required field');
  })
});
