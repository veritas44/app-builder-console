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
}
export default function ProductInfo(props: ProductInfoProps) {
    const { onClickBack, handleValueChange } = props;
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

            mainHading: {
                fontWeight: 500,
                fontSize: "22px",
                color: "#222222",
                marginBottom: "24px"
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
            <TextTip name={"Agora App ID"} tip={"Agora App ID"} />
            <TextField
                className={classes.textField}
                label="App ID"
                name="AppID"
                variant="outlined"
                onChange={handleValueChange}

            />
            <TextTip name={"Agora App Certificate"} tip={"Agora App Certificate"} />
            <TextField
                className={classes.textField}
                label="Agora App Certificate"
                name="APP_CERTIFICATE"
                variant="outlined"
                onChange={handleValueChange}

            />
        </>
    );
}
