import React from 'react';
import {ColorPicker, Color as ColorType} from 'material-ui-color';
import {Box, TextField, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {debounce} from 'ts-debounce';
import {ColorFontStyles} from '../styles/ColorFontStyles';
// import type { FormState } from '../pages/console';
interface ProductInfoProps {
  children?: React.ReactNode;
  onClickBack: VoidFunction;
  handleColorChange: (color: string, name: string) => void;
  handleValueChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  value: any;
}

export default function ColorFont(props: ProductInfoProps) {
  const classes = ColorFontStyles();
  const {onClickBack, handleColorChange, handleValueChange, value} = props;
  const handleChange = debounce(
    (colorValue: ColorType) => {
      requestAnimationFrame(() => {
        handleColorChange('#' + colorValue.hex, 'primaryColor');
      });
    },
    20,
    {isImmediate: true},
  );

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
                onChange={handleChange}
                value={value.primaryColor}
              />
            ),
          }}
        />
      </Box>
    </>
  );
}
