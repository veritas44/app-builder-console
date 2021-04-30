import React, {useState} from 'react';
import {
  Dialog,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  makeStyles,
  createStyles,
  Button,
  LinearProgress,
} from '@material-ui/core';

interface Deploy {
  handleDialogClose: () => void;
  openDialog: boolean;
  allowedDeploy: boolean;
  herokuUploadStatus: String;
  saveBtn: String;
}
function csrfToken() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8; // eslint-disable-line
    return v.toString(16);
  });
}
const Deploy = (props: Deploy) => {
  const useStyles = makeStyles(() =>
    createStyles({
      Container: {
        margin: '40px',
        display: 'flex',
        flexWrap: 'wrap',
      },
      CardContainer: {
        width: '280px',
        margin: '13px',
      },
      Typography: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#0A9DFC',
      },
      Typography2: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#0A9DFC',
        marginBottom: '15px',
      },
      Typography3: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        color: '#434343',
        marginBottom: '40px',
      },
      primaryButton: {
        color: '#fff',
        width: '100%',
        marginBottom: '26px',
      },
      Hading: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#000000',
        marginBottom: '0px',
        marginTop: '24px',
      },
      Close: {
        marginLeft: 'auto',
        marginTop: '24px',
        marginRight: '24px',
        cursor: 'pointer',
      },
      paper: {
        width: '100%',
        height: '75%',
      },
      sucesss: {
        color: 'red',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        padding: '8px',

        top: '10px',
        left: '10px',
        borderRadius: '10px',
      },
      sucesssText: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        color: '#FFFFFF',
        marginLeft: '8px',
        marginBottom: '0px',
      },
    }),
  );
  const classes = useStyles({});
  const [onHoverHeroku, setOnHoverHiroku] = useState<any>(false);
  return (
    <>
      <Dialog
        onClose={props.handleDialogClose}
        open={props.openDialog}
        maxWidth="lg">
        <Box
          className={classes.Close}
          onClick={() => {
            props.handleDialogClose();
          }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.49512 19.5045L19.5045 4.49512"
              stroke="#5E6871"
              stroke-width="1.5"
            />
            <path
              d="M4.49512 4.49512L19.5045 19.5045"
              stroke="#5E6871"
              stroke-width="1.5"
            />
          </svg>
        </Box>

        <Typography
          gutterBottom
          variant="h5"
          component="p"
          className={classes.Hading}>
          Deploy Your App
        </Typography>

        <Box className={classes.Container}>
          <Card className={classes.CardContainer}>
            <CardActionArea>
              {props.herokuUploadStatus === 'succeeded' ? (
                <Box
                  className={classes.sucesss}
                  style={{backgroundColor: '#1EB76E'}}>
                  <img src="./check-circle.svg" alt="check" />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    className={classes.sucesssText}>
                    Completed
                  </Typography>
                </Box>
              ) : (
                ''
              )}
              {props.herokuUploadStatus === 'failed' ? (
                <Box
                  className={classes.sucesss}
                  style={{backgroundColor: 'red'}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    className={classes.sucesssText}
                    style={{marginLeft: '0px'}}>
                    Deploy Backend Failed
                  </Typography>
                </Box>
              ) : (
                ''
              )}

              <CardMedia
                component="img"
                alt="Deploy to HEREKU"
                height="160"
                image="./HEREKU.svg"
                title="Contemplative Reptile"
              />
              {props.herokuUploadStatus === 'pending' && <LinearProgress />}
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.Typography}>
                  Step 1:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.Typography2}>
                  Deploy Backend to Heroku
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.Typography3}>
                  One line description
                </Typography>
                <Button
                  variant="contained"
                  style={
                    !onHoverHeroku?props.herokuUploadStatus
                      ? props.herokuUploadStatus === 'succeeded'
                        ? {backgroundColor: '#1EB76E'}
                        : props.herokuUploadStatus === 'failed'
                        ? {backgroundColor: 'red'}
                        : {backgroundColor: '#FFC107', color: 'black'}
                      : {backgroundColor: '#099DFD'} : props.herokuUploadStatus === 'pending'? {backgroundColor: '#FFC107', color: 'black'}:{backgroundColor: '#099DFD'}
                  }
                  disableElevation
                  className={classes.primaryButton}
                  onMouseOver={()=>{setOnHoverHiroku(true)}}
                  onMouseOut={()=>{setOnHoverHiroku(false)}}
                  onClick={() => {
                    if (props.allowedDeploy) {
                      const token: String = csrfToken();
                      window.open(
                        `https://id.heroku.com/oauth/authorize?client_id=52b53adb-6e48-4fdd-8c73-36c8ad8197d3&response_type=code&scope=global&state=${token}`,
                        'myWindow',
                        'width=1015,height=580',
                      );
                    } else {
                      alert('please save your data first');
                    }
                  }}
                  disabled={
                    props.saveBtn.toLowerCase() === 'save' &&
                    props.herokuUploadStatus === 'succeeded'
                  }>
                  {props.herokuUploadStatus && !onHoverHeroku?props.herokuUploadStatus === 'pending' ? (
                    <Box>pending</Box>
                  ) : props.herokuUploadStatus === 'succeeded' ? (
                    <Box>
                      <img
                        src="./check-circle.svg"
                        alt="check"
                        style={{marginRight: '10px'}}
                      />
                      Deploy Backend
                    </Box>
                  ) : (
                    <Box>Deploy Backend</Box>
                  ):props.herokuUploadStatus === 'pending' ? (
                    <Box>pending</Box>
                  ) : props.herokuUploadStatus === 'succeeded' ? (
                    <Box>
                      Re-Deploy Backend
                    </Box>
                  ) : (
                    <Box>Re-Deploy Backend</Box>
                  )}
                  {!props.herokuUploadStatus && <Box>Deploy Backend</Box>}
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.CardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Deploy to HEREKU"
                height="160"
                image="./netlify.svg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.Typography}>
                  Step 2:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.Typography2}>
                  Deploy Frontend to Netlify
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.Typography3}>
                  One line description
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  className={classes.primaryButton}
                  onClick={() => {
                    const token: string = csrfToken();
                    window.open(
                      `https://app.netlify.com/authorize?client_id=tRPRcR4Ouj4nHSK5wALTvb4y20o4IUfwZKAjwXtR8VU&response_type=token&redirect_uri=https://kind-jones-e9b088.netlify.app/&state=${token}`,
                    );
                  }}
                  disabled={true}>
                  <Box>Deploy Frontend</Box>
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.CardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Deploy to HEREKU"
                height="160"
                image="./publish.svg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.Typography}>
                  Step 3:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.Typography2}>
                  View Published App
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.Typography3}>
                  One line description
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  className={classes.primaryButton}
                  disabled={true}>
                  <Box>View Published App</Box>
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Dialog>
    </>
  );
};
export default Deploy;
