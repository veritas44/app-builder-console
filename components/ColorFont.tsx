import React from 'react';
import {ColorPicker, Color as ColorType} from 'material-ui-color';
import {
  Box,
  makeStyles,
  createStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {debounce} from 'ts-debounce';
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
  const {onClickBack, handleColorChange, handleValueChange, value} = props;
  const useStyles = makeStyles(() =>
    createStyles({
      backBtn: {
        display: 'flex',
        marginBottom: '15px',
        cursor: 'pointer',
        width: 'fit-content',
      },
      backArrow: {
        color: '#0B9DFC',
        marginRight: '10px',
      },
      hadding: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '22px',
        lineHeight: '20px',
        color: '#222222',
        marginBottom: '24px',
      },
      textField: {
        background: '#F1F1F1',
        borderRadius: '4px',
        display: 'flex',
        borderColor: '#099DFD80',
        marginTop: '14px',
        marginBottom: '17px',
      },
      headingContainer: {
        backgroundColor: '#a7cdfc',
        borderBottomRightRadius: '50px',
        borderTopRightRadius: '50px',
      },
      mainHading: {
        fontWeight: 500,
        fontSize: '19px',
        color: '#616161',
        marginBottom: '15px',
      },
      Text: {
        fontWeight: 'normal',
        fontSize: ' 18px',
        color: '#222222',
        marginBottom: '16px',
      },
      Text2: {
        fontWeight: 'normal',
        fontSize: '15px',
        color: '#394A64',
      },
    }),
  );
  const classes = useStyles();
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
        <Box component="span">back</Box>
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
