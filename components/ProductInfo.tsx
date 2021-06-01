import React from 'react';
import {Box, TextField, TextareaAutosize, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextTip from '../components/textTip';
import {strValidation} from './validation';
import type {FormState} from '../pages/builder';
import {ProductInfoStyles} from '../styles/ProductInfoStyles';
interface ProductInfoProps {
  children?: React.ReactNode;
  onClickBack: VoidFunction;
  handleValueChange:
    | ((
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => void)
    | undefined
    | any;
  value: FormState;
  errorHandler: any;
  setErrorHandler: Function;
}

export default function ProductInfo(props: ProductInfoProps) {
  const classes = ProductInfoStyles();
  const {onClickBack, handleValueChange, errorHandler} = props;
  const [proNameErr, setProNameErr] = React.useState<string>('');
  const [proIdErr, setProIdErr] = React.useState<string>('');
  const [prodDescErr, setProdDescErr] = React.useState<string>('');
  React.useEffect(() => {
    console.log('hello', errorHandler.ProductInformation);
    setProNameErr(errorHandler.ProductInformation.ProductName);
    setProIdErr(errorHandler.ProductInformation.ProductId);
    setProdDescErr(errorHandler.ProductInformation.ProductDesc);
  }, [errorHandler.ProductInformation]);
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
        General
      </Box>
      <Box pl={15} mr={15} className={classes.headingContainer}>
        <Typography
          variant="caption"
          className={classes.mainHading}
          component="h1">
          Product Information
        </Typography>
      </Box>
      <Box px={15}>
        <TextTip
          name={'Product Name'}
          tip={'Product Name of your application. (Can contains spaces etc.)'}
        />
        <TextField
          error={proNameErr && proNameErr.length > 0 ? true : false}
          className={classes.textField}
          label="E.g. Acme Conferencing"
          name="HEADING"
          variant="outlined"
          value={props.value.HEADING}
          onChange={(event: any) => {
            handleValueChange(event);
          }}
          helperText={proNameErr ? proNameErr : ''}
        />
        <Box component="div" className={classes.textToTip}>
          File Name: acme_conferencing
        </Box>
        <TextTip name={'Product ID'} tip={'Product ID of your application.'} />
        <TextField
          error={proIdErr && proIdErr.length > 0 ? true : false}
          className={classes.textField}
          label="E.g. product-id"
          name="Product_id"
          variant="outlined"
          value={props.value.Product_id || ''}
          onChange={(event: any) => {
            console.log(props.value.Product_id);
            if (
              strValidation(/^[$A-Z_][0-9A-Z_$]*$/i, event.target.value) ||
              !event.target.value
            ) {
              handleValueChange(event);
            }
          }}
          helperText={proIdErr}
        />
        <Box component="div" className={classes.textToTip}>
          Only Alphanumeric and "$, _" is allowed.
        </Box>
        <TextTip
          name={'Product Description '}
          tip={
            'Your project description will be used on the home screen and as the description in social media shares.'
          }
        />
        <TextareaAutosize
          style={
            prodDescErr
              ? {border: '1px solid #ff1744', outline: 'none'}
              : {border: '1px solid #DEE5EF', outline: 'none'}
          }
          rowsMin={5}
          name="SUBHEADING"
          placeholder="E.g. The Real-Time Engagement Platform for meanningful human connections"
          className={classes.textarea}
          value={props.value.SUBHEADING}
          onChange={handleValueChange}
        />
        {prodDescErr && (
          <Box fontSize="12px" lineHeight="0.8" ml={6} color="red">
            {prodDescErr}
          </Box>
        )}
      </Box>
    </>
  );
}
