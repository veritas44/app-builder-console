import React from 'react';
import { Box, Typography} from '@material-ui/core';
import { useSideNavStyles } from './AppBuilderCustomizeTabs';
import ProductInfo from '../components/ProductInfo';
import ColorFont from '../components/ColorFont';
import JoinScreen from '../components/JoinScreen';
import LogoBackground from '../components/LogoBackground';
import Conferencing from '../components/Conferencing';

export type LogoStateType = File | null;
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    padding?: number;
}
  
export function TabPanel(props: TabPanelProps) {
    let {children, value, index, padding, ...other} = props;
    padding === undefined ? (padding = 2) : {};
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}>
        {value === index && (
          <Box p={padding}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
const AppBuilderVerticalTabContent = ({ 
    selectedTabValue, 
    onClickBack, 
    productInfo,
    setProductInfo,
    errorHandler, 
    setErrorHandler,
    handleChangesSaveStatusPending
}) => {
    const SideBarClasses = useSideNavStyles();
    const handleValueChange = (event: any) => {
        setProductInfo({...productInfo, [event.target.name]: event.target.value});
        handleChangesSaveStatusPending()     
    };
    const handleThemeChnage = (theme: any) => {
        setProductInfo(() => {
            return {
            ...productInfo,
            primaryColor: theme.primaryColor,
            primaryFontColor: theme.primaryFontColor,
            secondaryFontColor: theme.secondaryFontColor,
            bg: theme.bg,
            };
        });
        handleChangesSaveStatusPending()      
    };
    const handleColorChange = (color: string, name: string) => {
        setProductInfo(() => {
            return {...productInfo, [name]: color};
        });
        handleChangesSaveStatusPending()      
    };
    const handleUpload = (file: LogoStateType, name: string) => {
        setProductInfo({
            ...productInfo,
            [name]: file
        });
        const tempObj: any = {...productInfo};
        tempObj[name] = file !== null ? `${file}` : '';
        handleChangesSaveStatusPending()      
    };
    
    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target;
        setProductInfo({
            ...productInfo,
            [name]: checked,
        });
        handleChangesSaveStatusPending()     
    };
    
    return (
        <Box py={20} className={SideBarClasses.subContent}>
            <TabPanel padding={0} value={selectedTabValue} index={1}>
                <ProductInfo
                    onClickBack={onClickBack}
                    handleValueChange={handleValueChange}
                    value={productInfo}
                    errorHandler={errorHandler}
                    setErrorHandler={setErrorHandler}
                />
            </TabPanel>
            <TabPanel padding={0} value={selectedTabValue} index={3}>
                <ColorFont
                    onClickBack={onClickBack}
                    handleColorChange={handleColorChange}
                    handleThemeChnage={handleThemeChnage}
                    handleValueChange={handleValueChange}
                    handleUpload={handleUpload}
                    value={productInfo}
                />
            </TabPanel>
            <TabPanel padding={0} value={selectedTabValue} index={4}>
                <LogoBackground
                    value={productInfo}
                    onClickBack={onClickBack}
                    handleUpload={handleUpload}
                />
            </TabPanel>
            <TabPanel padding={0} value={selectedTabValue} index={6}>
                <JoinScreen
                    value={productInfo}
                    onClickBack={onClickBack}
                    handleCheckChange={handleCheckChange}
                    handleValueChange={handleValueChange}
                    errorHandler={errorHandler}
                    setErrorHandler={setErrorHandler}
                />
            </TabPanel>
            <TabPanel padding={0} value={selectedTabValue} index={7}>
                <Conferencing
                    onClickBack={onClickBack}
                    handleValueChange={handleValueChange}
                    value={productInfo}
                    handleCheckChange={handleCheckChange}
                    errorHandler={errorHandler}
                    setErrorHandler={setErrorHandler}
                />
            </TabPanel>
      </Box>
    )
}

export default AppBuilderVerticalTabContent;