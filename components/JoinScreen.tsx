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

            uploadBox: {
                marginTop: "15px",
                marginBottom: "25px"
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
                Join Screen
            </Typography>
            <TextTip name={"Illustration"} tip={"Illustration here"} />
            <Box className={classes.uploadBox}>
                <Upload
                    handler={handleUpload}
                    name={'illustration'}
                />
            </Box>
        </>
    );
}
