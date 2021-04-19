import React from 'react';
import {
    Box, makeStyles,
    createStyles,
    TextField,
    Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextTip from "../components/textTip";
interface ProductInfoProps {
    children?: React.ReactNode;
    onClickBack: VoidFunction;
    handleValueChange?: ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined;
    value: any;
}
export default function ProductInfo(props: ProductInfoProps) {
    const { onClickBack, handleValueChange, value } = props;
    const [validation, setValidation] = React.useState<any>({
        AppID: false,
        APP_CERTIFICATE: false
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
                Agora Configuration
            </Typography>
            <TextTip name={"Agora App ID"} tip={"An Agora App ID, can be obatained from console.agora.io"} />
            <TextField
                error={validation.AppID}
                className={classes.textField}
                label="App ID"
                name="AppID"
                value={value.AppID}
                variant="outlined"
                onChange={(event) => {
                    if (/^$|^[1-9]+$/.test(event.target.value)) {
                        handleValueChange(event);
                        setValidation({ ...validation, AppID: false });
                    }
                    else {
                        setValidation({ ...validation, AppID: true });
                    }
                }}

            />
            {
                validation.AppID == true ? <Box className={classes.validation}>
                    Please enter a valid name with alpha numeric only.
            </Box> : ""
            }
            <TextTip name={"Agora App Certificate"} tip={"App Certificate is used by Agora to generate tokens for security."} />
            <TextField
                error={validation.APP_CERTIFICATE}
                className={classes.textField}
                label="Agora App Certificate"
                name="APP_CERTIFICATE"
                variant="outlined"
                value={value.APP_CERTIFICATE}
                onChange={(event) => {
                    if (/^$|^[A-Za-z.1-9]+$/.test(event.target.value)) {
                        handleValueChange(event);
                        setValidation({ ...validation, APP_CERTIFICATE: false });
                    }
                    else {
                        setValidation({ ...validation, APP_CERTIFICATE: true });
                    }
                }}

            />
            {
                validation.APP_CERTIFICATE == true ? <Box className={classes.validation}>
                    Please enter a valid name with alpha numeric only.
            </Box> : ""
            }
        </>
    );
}
