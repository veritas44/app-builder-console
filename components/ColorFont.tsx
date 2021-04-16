import React from 'react';
import { ColorPicker, Color as ColorType } from 'material-ui-color';

import {
    Box, makeStyles,
    createStyles,
    TextField,
    Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { debounce } from 'ts-debounce';
interface ProductInfoProps {
    children?: React.ReactNode;
    onClickBack: VoidFunction;
    colorCode: any,
    handleColorChange: any;
    handleValueChange: any;
}
export default function ColorFont(props: ProductInfoProps) {
    const { onClickBack, colorCode, handleColorChange, handleValueChange } = props;

    const useStyles = makeStyles(() =>
        createStyles({
            backBtn: {
                display: "flex",
                marginBottom: "35px"
            },
            backArrow: {
                color: "#0B9DFC",
                marginRight: "10px"
            },
            hadding: {
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "22px",
                lineHeight: "20px",
                color: "#222222",
                marginBottom: "24px"
            },
            textField: {
                background: "#F1F1F1",
                borderRadius: "4px",
                display: 'flex',
                borderColor: '#099DFD80',
                marginTop: "14px",
                marginBottom: "17px"
            },
            mainHading: {
                fontWeight: 500,
                fontSize: "22px",
                color: "#222222",
                marginBottom: "24px"
            },
            Text: {
                fontWeight: "normal",
                fontSize: " 18px",
                color: "#222222",
                marginBottom: "16px"
            },
            Text2: {
                fontWeight: "normal",
                fontSize: "15px",
                color: "#394A64",

            }
        }),
    );
    const classes = useStyles();
    const handleChange = debounce(
        (colorValue: ColorType) => {
            requestAnimationFrame(() => {
                handleColorChange('#' + colorValue.hex, "primaryColor");
            });
        },
        20,
        { isImmediate: true },
    );
    return (
        <>
            <Box component="div" className={classes.backBtn} onClick={onClickBack}><ArrowBackIcon className={classes.backArrow} /><Box component="span">back</Box></Box>
            <Typography variant="caption"
                className={classes.mainHading}
                component="h1">
                Color and Fonts
            </Typography>
            <Box component="div" className={classes.Text}>Color </Box>
            <Box component="div" className={classes.Text2}>Primary Color</Box>
            <TextField
                value={colorCode}
                className={classes.textField}
                name="primaryColor"
                variant="outlined"
                onChange={handleValueChange}
                InputProps={{
                    endAdornment: <ColorPicker
                        hideTextfield
                        disableAlpha
                        onChange={handleChange}
                        value={colorCode}
                    />
                }}
            />




        </>
    );
}
