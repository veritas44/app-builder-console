import React from 'react';
import {ColorPicker, Color as ColorType} from 'material-ui-color';
import {Box, TextField, Typography, Grid} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {debounce} from 'ts-debounce';
import TextTip from '../components/textTip';
import Upload from './Upload';
import {ColorFontStyles} from '../styles/ColorFontStyles';
import {theme} from '../Theme/themeOption';

export type LogoType = 'logoRect' | 'logoSquare' | 'illustration' | 'bg';
export type LogoStateType = File | null;

// import type { FormState } from '../pages/console';
interface ProductInfoProps {
  children?: React.ReactNode;
  onClickBack: VoidFunction;
  handleThemeChnage: (theme: any) => void;
  handleColorChange: (color: string, name: string) => void;
  handleValueChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | {name?: string; value: string}
    >,
  ) => void;
  handleUpload: (file: LogoStateType, name: LogoType) => void | any;
  value: any;
}

export default function ColorFont(props: ProductInfoProps) {
  const classes = ColorFontStyles();
  const {
    onClickBack,
    handleColorChange,
    handleValueChange,
    handleUpload,
    value,
    handleThemeChnage,
  } = props;
  let themeNames = Object.keys(theme);
  const handleChange = debounce(
    (colorValue: ColorType, name: string) => {
      requestAnimationFrame(() => {
        handleColorChange('#' + colorValue.hex, name);
      });
    },
    20,
    {isImmediate: true},
  );
  const onChangeTheme = async (themeName: any) => {
    if (themeName) {
      let primaryColor = theme[`${themeName}`].primaryColor;
      let primaryFontColor = theme[`${themeName}`].primaryFontColor;
      let secondaryFontColor = theme[`${themeName}`].secondaryFontColor;
      let bg = theme[`${themeName}`].bg;
      handleThemeChnage({
        primaryColor,
        primaryFontColor,
        secondaryFontColor,
        bg,
      });
    }
  };
  return (
    <>
      <Box
        px={15}
        component="div"
        className={classes.backBtn}
        onClick={onClickBack}>
        <ArrowBackIcon className={classes.backArrow} />
        <Box component="span">Back</Box>
      </Box>
      <Box fontWeight={500} fontSize={22} mb={6} pl={15}>
        Branding
      </Box>
      <Box pl={15} mr={15} className={classes.headingContainer}>
        <Typography
          variant="caption"
          className={classes.mainHading}
          component="h1">
          Theme
        </Typography>
      </Box>
      <Box px={15} pb={10}>
        <Box component="div" className={classes.Text2} pb={5}>
          Choose Theme
        </Box>
        <Box px={5}>
          <Grid container spacing={5} style={{justifyContent:"center"}}>
            {themeNames.map((themeName, index) => {
              return <Grid item xs={3} key={index}>
                <Box 
                  onClick={()=>{onChangeTheme(themeName);}} 
                  margin="auto" 
                  width="24px" 
                  height="24px" 
                  borderRadius="4px" 
                  border="1px solid black"
                  style={{backgroundColor:theme[themeName].primaryColor,cursor:"pointer"}}></Box>
              </Grid>
            })}
          </Grid>
          </Box>
      </Box>
      <Box px={15}>
        <Box component="div" className={classes.Text}>
          Color{' '}
        </Box>
        <Box component="div" className={classes.Text2}>
          Primary Color
        </Box>
        <TextField
          value={value.primaryColor}
          className={classes.textField}
          name="primaryColor"
          variant="outlined"
          onChange={handleValueChange}
          InputProps={{
            endAdornment: (
              <ColorPicker
                hideTextfield
                disableAlpha
                onChange={(colorValue) => {
                  handleChange(colorValue, 'primaryColor');
                }}
                value={value.primaryColor}
              />
            ),
          }}
        />
        <Box component="div" className={classes.Text2}>
          Primary Font Color
        </Box>
        <TextField
          value={value.primaryFontColor}
          className={classes.textField}
          name="primaryFontColor"
          variant="outlined"
          onChange={handleValueChange}
          InputProps={{
            endAdornment: (
              <ColorPicker
                hideTextfield
                disableAlpha
                onChange={(colorValue) => {
                  handleChange(colorValue, 'primaryFontColor');
                }}
                value={value.primaryFontColor}
              />
            ),
          }}
        />
        <Box component="div" className={classes.Text2}>
          Secondary Font Color
        </Box>
        <TextField
          value={value.secondaryFontColor}
          className={classes.textField}
          name="secondaryFontColor"
          variant="outlined"
          onChange={handleValueChange}
          InputProps={{
            endAdornment: (
              <ColorPicker
                hideTextfield
                disableAlpha
                onChange={(colorValue) => {
                  handleChange(colorValue, 'secondaryFontColor');
                }}
                value={value.secondaryFontColor}
              />
            ),
          }}
        />
        <Box component="div" className={classes.Text}>
          Background{' '}
        </Box>
        <TextTip
          name={'Background Image'}
          tip={
            'Upload an background image to be used throughout the app. (recommended size 1920x1080)'
          }
        />
        <Box className={classes.uploadBox}>
          <Upload
            key={2}
            handler={handleUpload}
            name={'bg'}
            value={value['bg']}
          />
        </Box>
      </Box>
    </>
  );
}
