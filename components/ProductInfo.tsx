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
    projectIdEnable:boolean;
    errorHandler:any;
    setErrorHandler:Function;
}

export default function ProductInfo(props: ProductInfoProps) {
    const {onClickBack, handleValueChange,projectIdEnable,errorHandler} = props;
    const useStyles = makeStyles(() =>
        createStyles({
            backBtn: {
                display: "flex",
                marginBottom: "35px",
                cursor:"pointer",
                width:"fit-content"
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
                marginBottom: "25px"
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
    const [proNameErr,setProNameErr] = React.useState<string>('');
    const [proIdErr,setProIdErr] = React.useState<string>('');
    // const reservedNames = [
    //     'react', 'react-native','helloworld',
    //     'abstract',
    //     'continue',
    //     'for',
    //     'new',
    //     'switch',
    //     'assert',
    //     'default',
    //     'goto',
    //     'package',
    //     'synchronized',
    //     'boolean',
    //     'do',
    //     'if',
    //     'private',
    //     'this',
    //     'break',
    //     'double',
    //     'implements',
    //     'protected',
    //     'throw',
    //     'byte',
    //     'else',
    //     'import',
    //     'public',
    //     'throws',
    //     'case',
    //     'enum',
    //     'instanceof',
    //     'return',
    //     'transient',
    //     'catch',
    //     'extends',
    //     'int',
    //     'short',
    //     'try',
    //     'char',
    //     'final',
    //     'interface',
    //     'static',
    //     'void',
    //     'class',
    //     'finally',
    //     'long',
    //     'strictfp',
    //     'volatile',
    //     'const',
    //     'float',
    //     'native',
    //     'super',
    //     'while',
    //   ];
    React.useEffect(() => {
        console.log('hello',errorHandler.ProductInformation)
            setProNameErr(errorHandler.ProductInformation.ProductName);
            setProIdErr(errorHandler.ProductInformation.ProductId);
    }, [errorHandler.ProductInformation])
    return (
        <>
            <Box component="div" className={classes.backBtn} onClick={onClickBack}><ArrowBackIcon className={classes.backArrow} /><Box component="span">back</Box></Box>
            <Typography variant="caption"
                className={classes.mainHading}
                component="h1">
                Product Information
            </Typography>
            <TextTip name={"Product Name"} tip={"Product Name of your application. (Can contains spaces etc.)"} />
            <TextField
                error={proNameErr?true:false}
                className={classes.textField}
                label="E.g. Acme Conferencing"
                name="HEADING"
                variant="outlined"
                value={props.value.HEADING}
                onChange={(event: any) => {
                    handleValueChange(event);
                }}
                helperText={proNameErr?proNameErr:''}
            />
            <Box component="div" className={classes.textToTip}>File Name: acme_conferencing</Box>
            <TextTip name={"Product Id"} tip={"Product Name of your application. (Can contains spaces etc.)"} />
            <TextField
                error={(proIdErr && proIdErr.length>0) ?true:false}
                className={classes.textField}
                label="E.g. Project Id"
                name="Product_id"
                variant="outlined"
                value={props.value.Product_id}
                onChange={(event: any) => {
                    if(strValidation(/^[a-z0-9-]+$/, event.target.value) || !event.target.value){
                        handleValueChange(event);
                    }
                }}
                disabled={!projectIdEnable}
                helperText={proIdErr}
            />
                <Box component="div" className={classes.textToTip}>ProductID is not editable and Only Alphanumeric and "-" is allowed.</Box>
            <TextTip name={"Product Description "} tip={"Your project description will be used on the home screen and as the description in social media shares."} />
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
