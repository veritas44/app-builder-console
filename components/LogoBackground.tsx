import React from 'react';
import Upload from './Upload';
import {Box, makeStyles, createStyles, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextTip from '../components/textTip';
import type {FormState} from '../pages/console';
export type LogoType = 'logoRect' | 'logoSquare' | 'illustration' | 'bg';
export type LogoStateType = File | null;
interface ProductInfoProps {
  children?: React.ReactNode;
  onClickBack: VoidFunction;
  handleUpload: (file: LogoStateType, name: LogoType) => void | any;
  value: FormState;
}
export default function ProductInfo(props: ProductInfoProps) {
  const {onClickBack, handleUpload, value} = props;
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
      headingContainer: {
        backgroundColor: '#a7cdfc',
        borderBottomRightRadius: '50px',
        borderTopRightRadius: '50px',
      },
      mainHading: {
        fontWeight: 500,
        fontSize: '19px',
        color: '#616161',
      },
      Text: {
        fontWeight: 'normal',
        fontSize: ' 18px',
        color: '#222222',
        marginBottom: '16px',
        marginTop: '15px',
      },
      uploadBox: {
        marginTop: '15px',
        marginBottom: '25px',
      },
      drawerWidth: {
        width: '50%',
        ['@media (min-width:780px)']: {
          // eslint-disable-line no-useless-computed-key
          width: '80%',
        },
      },
    }),
  );
  const classes = useStyles();
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
      <Box
                          fontWeight={500}
                          fontSize={22}
                          mb={6}
                          pl={15}>
                          Branding
                        </Box>
      <Box pl={15} mr={15} className={classes.headingContainer}>
        <Typography
          variant="caption"
          className={classes.mainHading}
          component="h1">
          Logo and Background
        </Typography>
      </Box>
      <Box px={15}>
        <Box component="div" className={classes.Text}>
          Logo{' '}
        </Box>
        <TextTip
          name={'Primary Logo'}
          tip={
            'Upload an image to be used as the Primary Logo (recommended size 1200 x 412)'
          }
        />
        <Box className={classes.uploadBox}>
          <Upload
            key={0}
            handler={handleUpload}
            name={'logoRect'}
            value={value['logoRect']}
          />
        </Box>
        <TextTip
          name={'App Icon'}
          tip={
            'Upload an image to be used as the App Icon (recommended size 1000x1000)'
          }
        />
        <Box className={classes.uploadBox} style={{marginBottom: '40px'}}>
          <Upload
            key={1}
            handler={handleUpload}
            name={'logoSquare'}
            value={value['logoSquare']}
          />
        </Box>
        <hr style={{border: '1px solid #CECECE'}} />
        <Box component="div" className={classes.Text}>
          Background{' '}
        </Box>
        <TextTip
          name={'Background Image'}
          tip={
            'Upload an background image to be used throughout the app. (recommended size 1920x1080)'
          }
        />
        <Box className={classes.uploadBox}>
          <Upload
            key={2}
            handler={handleUpload}
            name={'bg'}
            value={value['bg']}
          />
        </Box>
      </Box>
    </>
  );
}
