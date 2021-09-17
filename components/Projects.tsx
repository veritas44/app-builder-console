import React, {useContext} from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useRouter} from 'next/router';
import moment from 'moment';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ProjectMenus from './MenuBox';
import {Button} from '@material-ui/core';
import {useQuery} from '@apollo/client';
import {projectListQuery} from '../graphql/queries';
import ApiStatusContext from './APIContext';
export interface IProjectMeta {
  id: string;
  product_name: string;
  created_at: string;
}
export interface IProject extends IProjectMeta {
  handleDeleteProject: (e: React.MouseEvent<HTMLElement>, id: string) => void;
}
export interface IProjectNav {
  skipData: number;
  setSkipData: (skipData: number) => void;
  loadMore: boolean;
}

export interface IProjects extends IProjectNav {
  projectList: IProjectMeta[];
  handleDeleteProject: (e: React.MouseEvent<HTMLElement>, id: string) => void;
  handleCreateNewProject: (e: React.MouseEvent<HTMLElement>) => void;
}
export const useCardStyles = makeStyles(() =>
  createStyles({
    Card: {
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '200px',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9F9F9',
      border: '2px dashed #BCBCBC',
      outline: 'none',
      cursor: 'pointer',
    },
    ADD: {
      width: '53px',
    },
    caption: {
      fontWeight: 'bold',
      fontSize: '14px',
      marginTop: '35px',
    },
    CardGrid: {
      width: '25%',
      padding: '10px 20px 10px 20px !important',
      ['@media (max-width:500px)']: {
        width: '100%',
      },
      ['@media (max-width:850px) and (min-width:500px)']: {
        width: '50%',
      },
    },
    media: {
      borderRadius: '4px',
      paddingTop: '56.25%',
    },
    mediaBackGround: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
    },
    caption2: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    caption3: {
      fontWeight: 'normal',
      fontSize: '14px',
      marginTop: '15px',
    },
    navContainer: {
      display: 'flex',
      ['@media (max-width:600px)']: {
        display: 'block',
      },
    },
    navigationBtn: {
      display: 'flex',
      marginLeft: 'auto',
      width: 'fit-content',
      paddingRight: '80px',
      paddingLeft: '80px',
      ['@media (max-width:500px)']: {
        zoom: '0.9',
      },
    },
    nextBtn: {
      width: '80px',
      height: '100%',
      placeItems: 'center',
      padding: '10px',
      marginLeft: '5px',
      fontFamily: 'acumin-pro, sans-serif',
      borderBottomRightRadius: '50px',
      borderTopRightRadius: '50px',
      '&:hover': {
        backgroundColor: '#349dfb',
        color: '#fff',
        cursor: 'pointer',
      },
    },
    prevBtn: {
      width: '80px',
      height: '100%',
      placeItems: 'center',
      padding: '10px',
      fontFamily: 'acumin-pro, sans-serif',
      marginRight: '5px',
      borderBottomLeftRadius: '50px',
      borderTopLeftRadius: '50px',
      '&:hover': {
        backgroundColor: '#349dfb',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  }),
);

const ProjectCard = ({
  id,
  product_name,
  created_at,
  handleDeleteProject,
}: IProject) => {
  const router = useRouter();
  const CardClasses = useCardStyles();

  return (
    <Grid className={CardClasses.CardGrid}>
      <Card
        style={{
          borderRadius: '10px',
          cursor: 'pointer',
          height: '100%',
          position: 'relative',
        }}
        onClick={() => {
          router.push(`/builder?id=${id}`);
        }}>
        <Card style={{margin: '15px'}}>
          <CardMedia className={CardClasses.media} image="./cardimg.png" />
        </Card>
        <CardContent>
          <Typography
            variant="caption"
            className={CardClasses.caption2}
            component="h1">
            {product_name}
          </Typography>
          <Typography
            variant="caption"
            className={CardClasses.caption3}
            component="p">
            {moment(created_at).format('MMM DD, yyyy')}
          </Typography>
        </CardContent>
        <Box position="absolute" right="10px" top="10px">
          <ProjectMenus
            deleteAction={(e: any) => {
              handleDeleteProject(e, id);
            }}
          />
        </Box>
      </Card>
    </Grid>
  );
};

const ProjectNavigation = ({skipData, setSkipData, loadMore}: IProjectNav) => {
  const CardClasses = useCardStyles();

  return (
    <Box className={CardClasses.navContainer}>
      <Box px={40} lineHeight={3} fontSize="16px" whiteSpace="nowrap">
        <b>Your Projects</b>
      </Box>
      {/* project navigation */}
      <Box className={CardClasses.navigationBtn} mt={5}>
        {skipData > 0 && (
          <Button
            disableRipple
            disableElevation
            className={CardClasses.prevBtn}
            onClick={() => {
              setSkipData(skipData - 3);
            }}>
            <ArrowBackIosIcon />
            &nbsp;Back
          </Button>
        )}
        {loadMore && (
          <Button
            disableRipple
            disableElevation
            className={CardClasses.nextBtn}
            onClick={() => {
              setSkipData(skipData + 3);
            }}>
            Next&nbsp;
            <ArrowForwardIosIcon />
          </Button>
        )}
      </Box>
    </Box>
  );
};

const Projects = ({
  handleCreateNewProject,
}: {
  handleCreateNewProject: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  const CardClasses = useCardStyles();
  const [projectList, setProjectList] = React.useState<any>([]);
  const [loadMore, setLoadMore] = React.useState(true);
  const [skipData, setSkipData] = React.useState(0);
  const {setLoading, setAPIError} = useContext(ApiStatusContext);
  const {
    loading,
    error,
    data,
    refetch: getProjectList,
  } = useQuery(projectListQuery(skipData));

  React.useEffect(() => {
    // const projects  = data.projects || [];
    // do checking here to ensure data exist
    if (data) {
      // mutate project
      setProjectList(data.projects);
      setLoading(false);
      setAPIError('');
    }
  }, [data]);
  React.useEffect(() => {
    getProjectList(projectListQuery(skipData));
  }, [skipData]);

  const handleDeleteProject = (e: any, id: String) => {
    // e.persist();
    // e.stopPropagation();
    // setLoading(true);
    // console.log(id);
    // deleteProjectData(id)
    //   .then((res) => {
    //     if (res) {
    //       getprojectsList(skipData)
    //         .then((data: any) => {
    //           let newListData = data.projects;
    //           setProjectList([...newListData]);
    //           setAPIError('');
    //           if (data.projects.length < 3) {
    //             setLoadMore(false);
    //           }
    //         })
    //         .catch((err) => {
    //           setLoading(() => false);
    //           setAPIError(err.toString());
    //         });
    //       setLoading(() => false);
    //     }
    //   })
    //   .catch((err) => {
    //     setLoading(() => false);
    //     setAPIError(err.toString());
    //   });
  };
  if (loading) {
    setLoading(true);
    return null;
  }
  if (error) {
    setAPIError(error.message);
    return null;
  }

  return (
    <Box mt={30}>
      <ProjectNavigation
        skipData={skipData}
        setSkipData={setSkipData}
        loadMore={loadMore}
      />
      <Box position="relative" px={30}>
        <Grid container xs={12} item={true} id="list">
          <Grid item className={CardClasses.CardGrid}>
            <Card onClick={handleCreateNewProject} className={CardClasses.Card}>
              <img className={CardClasses.ADD} src="./ADD.png" />
              <Typography
                variant="caption"
                className={CardClasses.caption}
                component="h1">
                New Project
              </Typography>
            </Card>
          </Grid>
          {projectList &&
            projectList.map((project: any, index: number) => (
              <ProjectCard
                {...project}
                handleDeleteProject={handleDeleteProject}
                key={index}
              />
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default Projects;
