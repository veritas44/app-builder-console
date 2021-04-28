import React from 'react';
import {
    Box, makeStyles,
    createStyles,
    TextField,
    TextareaAutosize,
    Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextTip from "../components/textTip";
import { strValidation } from './validation';
import type { FormState } from '../pages/console';
interface ProductInfoProps {
    children?: React.ReactNode;
    onClickBack: VoidFunction;
    handleValueChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined | any;
    value: FormState;
    setProductInfoCompvalidation: Function;
    productInfoCompvalidation: boolean;
}
export default function ProductInfo(props: ProductInfoProps) {
    const { onClickBack, handleValueChange, setProductInfoCompvalidation, productInfoCompvalidation } = props;
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
            textToTip: {
                fontWeight: "normal",
                fontSize: "15px",
                color: "#8D959D",
                marginBottom: "35px"
            },
            textarea: {
                width: "100%",
                fontSize: "15px",
                padding: "16px",
                borderRadius: "4px",
                marginTop: "14px",
                border: "1px solid #DEE5EF",
            },
            mainHading: {
                fontWeight: 500,
                fontSize: "22px",
                color: "#222222",
                marginBottom: "24px"
            },
            validation: {
                color: "#CF4040",
                fontSize: "20px",
                fontWeight: 400,
                marginBottom: "20px"
            }
        }),
    );
    const classes = useStyles();
    React.useEffect(() => {
        if (strValidation(/^[A-Za-z ]+$/, props.value.HEADING)) {
            setProductInfoCompvalidation(false);
        } else {
            setProductInfoCompvalidation(true);
        }
    }, [props.value.HEADING])

    return (
        <>
            <Box component="div" className={classes.backBtn} onClick={onClickBack}><ArrowBackIcon className={classes.backArrow} /><Box component="span">back</Box></Box>
            <Typography variant="caption"
                className={classes.mainHading}
                component="h1">
                Product Information
            </Typography>
            <TextTip name={"Product Name"} tip={"Your project description will be used on the home screen and as the description in social media shares."} />
            <TextField
                error={productInfoCompvalidation}
                className={classes.textField}
                label="E.g. Acme Conferencing"
                name="HEADING"
                variant="outlined"
                value={props.value.HEADING}
                onChange={(event: any) => {
                    handleValueChange(event);
                }}
            />
            {
                productInfoCompvalidation == true ? <Box className={classes.validation}>
                    Please enter a valid name with alpha numeric only.
            </Box> : ""
            }
            <Box component="div" className={classes.textToTip}>File Name: acme_conferencing</Box>
            <TextTip name={"Product Description "} tip={"Display Name of your application. (Can contains spaces etc.) "} />
            <TextareaAutosize
                style={{ border: "1px solid #DEE5EF", outline: "none" }}
                rowsMin={5}
                name="SUBHEADING"
                placeholder='E.g. The Real-Time Engagement Platform for meanningful human connections'
                className={classes.textarea}
                value={props.value.SUBHEADING}
                onChange={handleValueChange}
            />

        </>
    );
}
