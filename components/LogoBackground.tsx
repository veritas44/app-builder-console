import React from 'react';
import Upload from "./Upload"
import {
    Box, makeStyles,
    createStyles,
    Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextTip from "../components/textTip";
export type LogoType = 'logoRect' | 'logoSquare' | 'illustration' | 'bg';
export type LogoStateType = File | null;
interface ProductInfoProps {
    children?: React.ReactNode;
    onClickBack: VoidFunction;
    handleUpload: (file: LogoStateType, name: LogoType) => void;
}
export default function ProductInfo(props: ProductInfoProps) {
    const { onClickBack, handleUpload } = props;
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

        }),
    );
    const classes = useStyles();
    return (
        <>
            <Box component="div" className={classes.backBtn} onClick={onClickBack}><ArrowBackIcon className={classes.backArrow} /><Box component="span">back</Box></Box>
            <Typography variant="caption"
                className={classes.mainHading}
                component="h1">
                Logo and Background
            </Typography>
            <Box component="div" className={classes.Text}>Logo </Box>
            <TextTip name={"Primary Logo"} tip={"Primary Logo here"} />
            <Upload
                handler={handleUpload}
                name={'logoRect'}
            />



        </>
    );
}
