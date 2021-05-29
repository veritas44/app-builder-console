import React from 'react';
import { ColorPicker, Color as ColorType } from 'material-ui-color';
import { Box, TextField, Typography, FormControl, Select} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { debounce } from 'ts-debounce';
import TextTip from '../components/textTip';
import Upload from './Upload';
import { ColorFontStyles } from '../styles/ColorFontStyles';
import {theme} from '../Theme/themeOption'

export type LogoType = 'logoRect' | 'logoSquare' | 'illustration' | 'bg';
export type LogoStateType = File | null;

// import type { FormState } from '../pages/console';
interface ProductInfoProps {
  children?: React.ReactNode;
  onClickBack: VoidFunction;
  handleThemeChnage:(theme:any)=>void;
  handleColorChange: (color: string, name: string) => void;
  handleValueChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: string }>,
  ) => void;
  handleUpload: (file: LogoStateType, name: LogoType) => void | any;
  value: any;
}

export default function ColorFont(props: ProductInfoProps) {
  const classes = ColorFontStyles();
  const { onClickBack, handleColorChange, handleValueChange, handleUpload, value, handleThemeChnage } = props;
  let themeName = Object.keys(theme);
  const handleChange = debounce(
    (colorValue: ColorType, name: string) => {
      requestAnimationFrame(() => {
        handleColorChange('#' + colorValue.hex, name);
      });
    },
    20,
    { isImmediate: true },
  );
  const onChangeTheme =async (event :any) =>{

    console.log(event.target.name);
    console.log(event.target.value);
    if(event.target.value){
      let themeName:any = event.target.value;
      let primaryColor = theme[`${themeName}`].primaryColor
      let primaryFontColor = theme[`${themeName}`].primaryFontColor
      let secondaryFontColor = theme[`${themeName}`].secondaryFontColor
      let bg = theme[`${themeName}`].bg
      debugger;
      console.log(primaryColor,secondaryFontColor,primaryFontColor,bg)
      handleThemeChnage({
        primaryColor,
        primaryFontColor,
        secondaryFontColor,
        bg
      })
    }
  }
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
      <Box px={15}>
        <Box component="div" className={classes.Text2}>
          Choose Theme
        </Box>
        <FormControl
          variant="outlined"
          style={{ width: '100%', marginBottom: '17px' }}>
          <Select
            native
            onChange={onChangeTheme}
            name="Agora Theme">
              <option aria-label="None" value="">Choose Theme</option>
              {themeName.map((theme,index)=>{
                return <option value={theme} key={index}>
                {theme}
              </option>
              })}
          </Select>
        </FormControl>
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
                onChange={(colorValue) => { handleChange(colorValue, 'primaryColor'); }}
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
                onChange={(colorValue) => { handleChange(colorValue, 'primaryFontColor'); }}
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
                onChange={(colorValue) => { handleChange(colorValue, 'secondaryFontColor'); }}
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
