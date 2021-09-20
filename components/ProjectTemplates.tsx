import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useCardStyles} from '../components/Projects';

const ProjectTemplates = ({
  handleCreateNewProject,
}: {
  handleCreateNewProject: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  const CardClasses = useCardStyles();

  return (
    <Box px={30} mt={15} mb={15}>
      <Box px={10} lineHeight={3} fontSize="16px">
        <b>App Templates</b>
      </Box>
      <Grid container xs={12} item={true} id="list">
        <Grid item className={CardClasses.CardGrid}>
          <Card
            onClick={handleCreateNewProject}
            style={{borderRadius: '10px', cursor: 'pointer', height: '100%'}}>
            <Card style={{margin: '15px'}}>
              <CardMedia
                className={`${CardClasses.media} ${CardClasses.mediaBackGround}`}
                image="./DefaultImg.png"
              />
            </Card>
            <CardContent>
              <Typography
                variant="caption"
                className={CardClasses.caption2}
                component="h1">
                Video Meetings
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={CardClasses.CardGrid}>
          <Card style={{borderRadius: '10px', height: '100%'}}>
            <Card style={{margin: '15px'}}>
              <CardMedia
                className={`${CardClasses.media} ${CardClasses.mediaBackGround}`}
                image="./education.png"
              />
            </Card>
            <CardContent>
              <Typography
                variant="caption"
                className={CardClasses.caption2}
                component="h1">
                Online Class (Coming Soon)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={CardClasses.CardGrid}>
          <Card style={{borderRadius: '10px', height: '100%'}}>
            <Card style={{margin: '15px'}}>
              <CardMedia
                className={`${CardClasses.media} ${CardClasses.mediaBackGround}`}
                image="./enterprise.png"
              />
            </Card>
            <CardContent>
              <Typography
                variant="caption"
                className={CardClasses.caption2}
                component="h1">
                Virtual Event (Coming Soon)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectTemplates;
