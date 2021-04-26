import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from "@material-ui/core/Dialog";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { FormControl, Select, Button } from '@material-ui/core';
import { Link } from '@material-ui/core';
import client from "../config/apollo";
import { projectList } from '../config/query';
import moment from 'moment'

const useNavStyles = makeStyles(() =>
  createStyles({
    AppBar: {
      paddingLeft: "40px",
      paddingRight: "40px"
    },
    Logo: {
      height: "25px",
      marginRight: "auto"
    },
    Avatar: {
      width: "30px",
      height: "30px",
      background: "#DEE5EF"
    },
    Name: {
      color: "black"
    }
  }),
);
const useHadStyles = makeStyles(() =>
  createStyles({
    LeftGrid: {
      height: "356px",
      background: "linear-gradient(90deg, #1C6DDB 1.06%, #1A0271 100%)"
    },
    RightGrid: {
      ['@media (max-width:959px)']: {
        display: "none"
      },
    },
    LeftGridText: {
      color: "white",
      fontSize: "40px",
      ['@media (max-width:800px)']: {
        fontSize: "30px",
      },
    }, backGround: {
      height: "356px",
      width: "100%"
    },
  }),
);
const useCardStyles = makeStyles(() =>
  createStyles({
    Card: {
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      minHeight: "200px",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F9F9F9",
      border: "2px dashed #BCBCBC",
      outline: "none"
    },
    ADD: {
      width: "53px"
    },
    caption: {
      fontWeight: "bold",
      fontSize: "14px",
      marginTop: "35px"
    },
    CardGrid: {
      width: "25%",
      padding: "20px !important",
      ['@media (max-width:500px)']: {
        width: "100%"
      },
      ['@media (max-width:850px) and (min-width:500px)']: {
        width: "50%"
      }
    },
    media: {
      borderRadius: "4px",
      paddingTop: '56.25%',
    },
    caption2: {
      fontWeight: "bold",
      fontSize: "16px"
    },
    caption3: {
      fontWeight: "normal",
      fontSize: "14px",
      marginTop: "15px"
    }
  }),
);
const useDialogStyles = makeStyles(() =>
  createStyles({
    DialogConatiner: {
      ['@media (max-width:800px)']: {
        padding: "15% 25%"
      },
    },
    caption: {
      fontWeight: "bold",
      fontSize: "40px",
      textAlign: "center"
    },
    caption2: {
      fontWeight: "normal",
      fontSize: "24px",
      marginTop: "24px"
    },
    formControl: {
      width: "100%",
      borderColor: "gray",
      marginTop: "15px",
      marginBottom: "32px"
    },
    nextButton: {
      width: "100%",
      color: "#fff",
    },
    validation: {
      color: "#CF4040",
      fontSize: "20px",
      fontWeight: 400,
      marginBottom: "20px"

    }
  }),
);

interface FormState {
  Project_Name: string;
  Project_Templete: string;
}

export default function ButtonAppBar() {
  const NavbarClasses = useNavStyles();
  const HadClasses = useHadStyles();
  const CardClasses = useCardStyles();
  const DialogClasses = useDialogStyles();
  const templet: string[] = ['Education - Coming Soon', 'Virtual Event - Coming Later', 'Watch Party - Coming Later'];
  const [project, setProject] = React.useState<FormState>({
    Project_Name: "",
    Project_Templete: "Video Conferencing"
  });
  const [validation, setValidation] = React.useState<any>(false);
  const [projectsList, setProjectsList] = React.useState<any>([]);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (event: any) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  React.useEffect(() => {
    if (window.opener) {
      window.opener.postMessage({ name: "test", url: window.location.href }, '*');
      window.opener.addEventListener("message", (evt: any) => {
        if (evt.origin == "http://localhost:3005" && evt.data.name === "test") {
          window.close();
        }
        return;
      });
    }
  }, []);

  React.useEffect(() => {
    client.query({ query: projectList }).then((data: any) => {
      setProjectsList(data.data.projects);
    });
  }, []);


  return (
    <div style={{ flexGrow: 1 }}>
      <Box position="static" color="white" >
        <Toolbar className={NavbarClasses.AppBar}>
          <img
            className={NavbarClasses.Logo}
            src="./logo.svg"
          />
          <Avatar className={NavbarClasses.Avatar} />
          <Box mx={7}>
            <Typography
              variant="body1"
              component="h3"
              className={NavbarClasses.Name}
            >
              Name
            </Typography>
          </Box>
        </Toolbar>
      </Box>
      <Grid container >
        <Grid md={6} sm={12} className={HadClasses.LeftGrid}>
          <Box width="100%" height="100%" px={35} fontSize={40} display="grid" alignItems='center'>
            <Typography
              variant="body1"
              className={HadClasses.LeftGridText}
            > The fastest way to personalize and publish real-time engagement apps
            </Typography>
          </Box>
        </Grid>
        <Grid md={6} className={HadClasses.RightGrid}>
          <img
            className={HadClasses.backGround}
            src="./background.png"
          />
        </Grid>
      </Grid>
      <Box p={30}>
        <Grid container spacing={5} xs={12} >
          <Grid item className={CardClasses.CardGrid} >
            <Card onClick={handleClickOpen} className={CardClasses.Card} >
              <img
                className={CardClasses.ADD}
                src="./ADD.png"
              />
              <Typography variant="caption"
                className={CardClasses.caption}
                component="h1">
                New Project
            </Typography>
            </Card>
          </Grid>
          {projectsList.map((obj: any, index: number) => (
            <Grid className={CardClasses.CardGrid} key={index}>
              <Link
                href={`/console?id=${obj.id}`} style={{ textDecoration: "none" }}>
                <Card style={{ borderRadius: "10px" }}>
                  <Card style={{ margin: "15px" }}>
                    <CardMedia
                      className={CardClasses.media}
                      image="./cardimg.png"
                    />
                  </Card>
                  <CardContent>
                    <Typography variant="caption"
                      className={CardClasses.caption2}
                      component="h1">
                      {obj.title}
                    </Typography>
                    <Typography variant="caption"
                      className={CardClasses.caption3}
                      component="p">
                      {moment(obj.createdAt).format('MMM DD, yyyy')}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Dialog
        onClose={handleClose}
        open={open}
        maxWidth="lg"
      >
        <Box py={50} px={125} className={DialogClasses.DialogConatiner}>
          <Box component="div" mb={32.5}>
            <Typography variant="caption"
              className={DialogClasses.caption}
              component="h1">
              Name your project
            </Typography>
            <Typography variant="caption"
              className={DialogClasses.caption2}
              component="h1">
              Tell us a little about what you’re trying to build
            </Typography>
          </Box>
          <Box>
            <Box fontSize={14} fontWeight="fontWeightBold">
              Project Name
            </Box>
            <TextField error={validation} className={DialogClasses.formControl} id="outlined-basic" label="Enter Your Project Name" variant="outlined"
              value={project.Project_Name}
              onChange={(event) => {
                if (/^$|^[A-Za-z]+$/.test(event.target.value)) {
                  handleValueChange(event);
                  setValidation(false);
                }
                else {
                  setValidation(true);
                  handleValueChange(event);
                }
              }}
              name={"Project_Name"}
            />
            {
              validation == true ? <Box className={DialogClasses.validation}>
                Please enter a valid name with alpha numeric only.
            </Box> : ""
            }
            <Box fontSize={14} fontWeight="fontWeightBold">
              Project Templete
            </Box>
            <FormControl variant="outlined" className={DialogClasses.formControl} >
              <Select
                native onChange={handleValueChange} value={project.Project_Templete} name={"Project_Templete"}>
                <option value={"Video Conferencing"} >Video Conferencing</option>
                {templet.map((value, index) => (
                  <option value={value} key={index}>{value}</option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" color="primary" className={DialogClasses.nextButton} disableElevation>
            <Box fontSize={16}>Next</Box>
          </Button>
        </Box>
      </Dialog >
    </div >
  );
}