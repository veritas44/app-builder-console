import {mount} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {act} from '@testing-library/react';
import Configuration from '../components/Configuration';
import {TextField} from '@material-ui/core'
describe('ColorFont tests',()=>{
    let wrapper: any;
    const mockFnonClickBack = jest.fn();
    const mockFnsetAgoraValidation = jest.fn();
    beforeEach(async () => {
        const value:any = {
            AppID:"",
            APP_CERTIFICATE:''
        }
        await act(async () => {
          wrapper = mount(<Configuration value={value} onClickBack={mockFnonClickBack} setAgoraValidation={mockFnsetAgoraValidation}/>);
        });
      });
    it('Should Check Error',async ()=>{
        expect(wrapper.find(TextField)).toHaveLength(2);
        // expect(wrapper.find(TextField))
    })
})