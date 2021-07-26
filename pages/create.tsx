import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {useRouter} from 'next/router';
import {
  Snackbar,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {
  getprojectsList,
  deleteProjectData,
  getLoggedInUser,
} from '../config/PerformAPI';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import ProjectTemplates from '../components/ProjectTemplates';
import NewProjectModal from '../components/NewProjectModal';
import ProjectBanner from '../components/ProjectBanner';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useBackDropStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#099DFD',
  },
}));
const useHadStyles = makeStyles(() =>
  createStyles({
    banerGrid: {
      height: '300px',
      ['@media (max-width:800px)']: {
        height: '250px',
      },
    },
    RightGrid: {
      height: '100%',
      display: 'flex',

      padding: '30px 0px 30px 40px',
      ['@media (max-width:600px)']: {
        display: 'none',
      },
      backgroundImage: "url('./bannerbg.png')",
    },
    LeftGrid: {
      paddingLeft: '70px',
      paddingRight: '30px',
      ['@media (max-width:900px)']: {
        fontSize: '24px',
      },
      ['@media (max-width:600px)']: {
        paddingLeft: '60px',
        paddingRight: '60px',
      },
    },
    LeftGridText: {
      color: 'white',
      fontSize: '32px',
      marginLeft: 'auto',
      maxWidth: '400px',
      lineHeight: '40px',
      ['@media (max-width:800px)']: {
        fontSize: '26px',
      },
    },
    backGround: {
      height: '100%',
      width: 'auto',
    },
  }),
);
interface IUser {
  email: string;
  id: number;
}
export default function ButtonAppBar() {
  const router = useRouter();
  const BackDropStyle = useBackDropStyles();
  const [projectList, setProjectList] = React.useState<any>([]);
  const [APIError, setAPIError] = React.useState<String>('');
  const [loadding, setLoading] = React.useState<boolean>(false);
  const [loadMore, setLoadMore] = React.useState(true);
  const [userProfile, setUserProfile] = React.useState<IUser>({
    email: '',
    id: 0,
  });
  const [open, setOpen] = React.useState(false);
  const [skipData, setSkipData] = React.useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    router.prefetch('/builder');
    if (window.opener) {
      window.opener.postMessage({name: 'test', url: window.location.href}, '*');
      window.close();
    }
  }, []);
  React.useEffect(() => {
    getLoggedInUser()
      .then((res) => {
        console.log(res, 'user');
        setUserProfile(res);
      })
      .catch((error) => console.log(error));
  }, []);
  React.useEffect(() => {
      setLoading(() => true);
      getprojectsList(skipData)
        .then((data: any) => {
          let newListData = data.projects;
          setProjectList([...newListData]);
          setAPIError('');
          if (data.projects.length < 3) {
            setLoadMore(false);
          } else {
            setLoadMore(true);
          }
          setLoading(() => false);
        })
        .catch((err) => {
          setLoading(() => false);
          setAPIError(err.toString());
        });
  }, [skipData]);
  const handleDeleteProject = (e: any, id: String) => {
    e.persist();
    e.stopPropagation();
    setLoading(true);
    console.log(id);

    deleteProjectData(id)
      .then((res) => {
        if (res) {
          getprojectsList(skipData)
            .then((data: any) => {
              let newListData = data.projects;
              setProjectList([...newListData]);
              setAPIError('');
              if (data.projects.length < 3) {
                setLoadMore(false);
              }
            })
            .catch((err) => {
              setLoading(() => false);
              setAPIError(err.toString());
            });
          setLoading(() => false);
        }
      })
      .catch((err) => {
        setLoading(() => false);
        setAPIError(err.toString());
      });
  };
  return (
    <div
      style={{
        flexGrow: 1,
        fontFamily: 'acumin-pro, sans-serif',
        fontStyle: 'normal',
      }}>
      <Navbar {...userProfile} />
      <ProjectBanner />
      <Projects 
        skipData={skipData}
        setSkipData={setSkipData}
        loadMore={loadMore}
        projectList={projectList} 
        handleCreateNewProject={handleClickOpen} 
        handleDeleteProject={handleDeleteProject} 
      />
      <ProjectTemplates handleCreateNewProject={handleClickOpen} />
      <NewProjectModal 
        handleClose={handleClose} 
        isOpen={open} 
        setLoading={setLoading} 
        setAPIError={setAPIError} 
        loading={loadding} />
      <Backdrop className={BackDropStyle.backdrop} open={loadding}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={APIError !== ''}
        autoHideDuration={6000}
        onClose={() => {
          setAPIError('');
        }}>
        <Alert
          onClose={() => {
            setAPIError('');
          }}
          severity="error">
          {APIError}
        </Alert>
      </Snackbar>
    </div>
  );
}
