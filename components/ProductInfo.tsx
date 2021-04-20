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
interface ProductInfoProps {
    children?: React.ReactNode;
    onClickBack: VoidFunction;
    handleValueChange: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined | any;
    value: any
}
export default function ProductInfo(props: ProductInfoProps) {
    const { onClickBack, handleValueChange } = props;

    const [validation, setValidation] = React.useState<any>({
        HEADING: false,
        SUBHEADING: false
    });
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
                color: "#8D959D",
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
                error={validation.HEADING}
                className={classes.textField}
                label="E.g. Acme Conferencing"
                name="HEADING"
                variant="outlined"
                value={props.value.HEADING}
                onChange={(event) => {
                    if (/^$|^[A-Za-z]+$/.test(event.target.value)) {
                        handleValueChange(event);
                        setValidation({ ...validation, HEADING: false });
                    }
                    else {
                        setValidation({ ...validation, HEADING: true });
                    }
                }}
            />
            {
                validation.HEADING == true ? <Box className={classes.validation}>
                    Please enter a valid name with alpha numeric only.
            </Box> : ""
            }
            <Box component="div" className={classes.textToTip}>File Name: acme_conferencing</Box>
            <TextTip name={"Product Description "} tip={"Display Name of your application. (Can contains spaces etc.) "} />
            <TextareaAutosize
                style={{ border: validation.SUBHEADING ? "1px solid red" : "1px solid #DEE5EF", outline: "none" }}
                rowsMin={5}
                name="SUBHEADING"
                placeholder='E.g. The Real-Time Engagement Platform for meanningful human connections.'
                className={classes.textarea}
                value={props.value.SUBHEADING}
                onChange={
                    (event) => {
                        if (/^$|^[A-Za-z .1-9]+$/.test(event.target.value)) {
                            handleValueChange(event);
                            setValidation({ ...validation, SUBHEADING: false });
                        }
                        else {
                            setValidation({ ...validation, SUBHEADING: true });
                        }
                    }
                }
            />
            {
                validation.SUBHEADING == true ? <Box className={classes.validation}>
                    Please enter a valid name with alpha numeric only.
            </Box> : ""
            }
        </>
    );
}
