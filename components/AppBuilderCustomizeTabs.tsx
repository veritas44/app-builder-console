import React from 'react';
import { Tabs, Box, Tab, makeStyles, createStyles, Theme, Typography, Button, Link, Grid} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AppBuilderVerticalTabContent from './AppBuilderVerticalTabContent';

function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const useSideNavStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerGrid: {
      backgroundColor: '#F9F9F9',
      overflowX: 'hidden',
      maxWidth: '280px',
      flexBasis: 'unset',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        maxWidth: '210px',
      },
      ['@media (max-width:550px)']: {
        maxWidth: '100%',
      },
    },
    tabs: {
      borderRight: `0px solid ${theme.palette.divider}`,
      // paddingRight: '30px',
    },
    NavLink: {
      padding: '0px',
      marginBottom: '5px',
      fontSize: '19px',
      ['@media (max-width:910px)']: {
        fontSize: '12px',
      },
      ['@media (max-width:550px)']: {
        fontSize: '20px',
      },
    },
    subContent: {
      height: 'calc(100vh - 70px)',
      overflowY: 'auto',
      width: '280px',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        zoom: 0.65,
      },
      ['@media (max-width:550px)']: {
        width: '100vw',
      },
    },
    agoraMenu0: {
      marginLeft: '-280px',
      width: '280px',
      height: 'calc(100vh - 70px)',
      overflowY: 'auto',
      transition: '400ms',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        marginLeft: '-210px',
        width: '210px',
      },
      ['@media (max-width:550px)']: {
        marginLeft: '-100vw',
        width: '100vw',
      },
    },
    active: {
      display:"grid",
      width: '280px',
      transition: '400ms',
      height: 'calc(100vh - 70px)',
      overflowY: 'auto',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        width: '210px',
      },
      ['@media (max-width:550px)']: {
        width: '100vw',
      },
    },
    wrapper: {
      alignItems: 'start',
      paddingLeft: '0px',
      // paddingRight: '30px',
      textTransform: 'capitalize',
    },
    selected: {
      borderBottomRightRadius: '50px',
      borderTopRightRadius: '50px',
      color: '#616161',
      width: 'calc(100% - 30px)',
    },
    unselected: {
      width: 'calc(100% - 30px)',
      transition: '0.3s',
      opacity: 0.7,
      '&:hover': {
        backgroundColor: '#d1e0f4',
        borderBottomRightRadius: '50px',
        borderTopRightRadius: '50px',
      },
    },
    muTabRoot: {
      minHeight: 'auto',
      minWidth: 'auto',
      maxWidth: '100%',
      textAlign: 'start',
      opacity: 1,
    },
    muTabRootPreview: {
      minHeight: 'auto',
      minWidth: 'auto',
    },
    closeDialog: {
      borderRadius: '12px',
    },
  }),
);

const VerticalTabs = ({ selectedTabValue, handleTabChange, productInfoErr, joinScrErr, conferenceErr }) => {
    const SideBarClasses = useSideNavStyles();

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedTabValue}
            onChange={handleTabChange}
            aria-label="Vertical tabs"
            className={SideBarClasses.tabs}
            indicatorColor="primary"
            TabIndicatorProps={{style: {display: 'none'}}}>
            <Box
                fontWeight={600}
                fontSize={22}
                mb={6}
                ml={15}
                width="fit-content"
            >
                General
            </Box>
            <Tab
                className={SideBarClasses.NavLink}
                label={
                    <Box display="flex" width={1} alignItems="center">
                        <Box
                            width={1}
                            pl={15}
                            className={SideBarClasses.unselected}>
                            <span>Product Information</span>
                        </Box>
                        {productInfoErr ? (
                            <InfoIcon
                                style={{
                                    color: '#FF8989',
                                    fontSize: '19px',
                                    marginLeft: '2px',
                                }}
                            />
                            ) : (
                                ''
                            )}
                    </Box>
                }
                {...a11yProps(0)}
                classes={{
                    wrapper: SideBarClasses.wrapper,
                    root: SideBarClasses.muTabRoot,
                }}>
            </Tab>
            <Box
                fontWeight={600}
                fontSize={22}
                pb={1}
                mb={6}
                mt={15}
                ml={15}
                width="fit-content"
                >
                Branding
            </Box>
            <Tab
                className={SideBarClasses.NavLink}
                label={
                    <Box display="flex" width={1} alignItems="center">
                        <Box
                            width={1}
                            pl={15}
                            className={SideBarClasses.unselected}>
                            <span>Theme</span>
                        </Box>
                    </Box>
                }
                {...a11yProps(2)}
                classes={{
                    wrapper: SideBarClasses.wrapper,
                    root: SideBarClasses.muTabRoot,
                }}
            />
            <Tab
                className={SideBarClasses.NavLink}
                label={
                    <Box display="flex" width={1} alignItems="center">
                        <Box
                            width={1}
                            pl={15}
                            className={SideBarClasses.unselected}>
                            <span>Logos</span>
                        </Box>
                    </Box>
                }
                {...a11yProps(3)}
                classes={{
                    wrapper: SideBarClasses.wrapper,
                    root: SideBarClasses.muTabRoot,
                }}
            />
            <Box
                fontWeight={600}
                fontSize={22}
                mb={6}
                mt={15}
                ml={15}
                width="fit-content"
            >
                App Features
            </Box>
            <Tab
                className={SideBarClasses.NavLink}
                label={
                    <Box display="flex" width={1} alignItems="center">
                        <Box
                            width={1}
                            pl={15}
                            className={SideBarClasses.unselected}>
                            <span>Authentication</span>
                        </Box>
                        {joinScrErr ? (
                            <InfoIcon
                            style={{
                                color: '#FF8989',
                                fontSize: '19px',
                                marginLeft: '2px',
                            }}
                            />
                        ) : (
                            ''
                        )}
                    </Box>
                }
                {...a11yProps(4)}
                classes={{
                    wrapper: SideBarClasses.wrapper,
                    root: SideBarClasses.muTabRoot,
                }}
            />
            <Tab
                className={SideBarClasses.NavLink}
                label={
                    <Box display="flex" width={1} alignItems="center">
                        <Box
                            width={1}
                            pl={15}
                            className={SideBarClasses.unselected}>
                            <span>Conferencing Screen</span>
                        </Box>
                        {conferenceErr ? (
                            <InfoIcon
                            style={{
                                color: '#FF8989',
                                fontSize: '19px',
                                marginLeft: '2px',
                            }}
                            />
                        ) : (
                            ''
                        )}
                    </Box>
                }
                {...a11yProps(5)}
                classes={{
                    wrapper: SideBarClasses.wrapper,
                    root: SideBarClasses.muTabRoot,
                }}
            />
      </Tabs>
    )
}

const VerticalFooter = () => {
    return (
        <Box textAlign="center" marginTop="auto">
            <Link
                href="/docs"
                style={{textDecoration: 'none'}}
                target="_blank">
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{borderRadius: '50px', marginBottom: '25px'}}
                        disableRipple={true}>
                        <Box mx={18}>Visit the Docs</Box>
                    </Button>
            </Link>
            <Box>Have a question?</Box>

            <Link
                href="https://www.agora.io/en/join-slack/"
                target="_blank"
                style={{textDecoration: 'none'}}>
                    <Typography style={{fontWeight: 700}}>
                        Join the Agora Slack Community
                    </Typography>
            </Link>
        </Box>
    )
}
const AppBuilderCustomizeTabs = ({ productInfo, setProductInfo, ...restProps }) => { // app builder form
    const SideBarClasses = useSideNavStyles();
    const [display, setDisplayTab] = React.useState<boolean>(true);
    const [selectedTabValue, setSelectedTabValue] = React.useState<number>(1);
    const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setDisplayTab(false);
        setSelectedTabValue(newValue);
    };
    const onClickBack = () => {
        setDisplayTab(true);
    };
    return (
        <Grid
            item
            xs={12}
            sm={4}
            md={3}
            className={SideBarClasses.containerGrid}>

            <Box display="inline-flex">
                <Box
                    py={20}
                    className={
                    display ? SideBarClasses.active : SideBarClasses.agoraMenu0
                }>

                    <VerticalTabs 
                        {...restProps} 
                        selectedTabValue={selectedTabValue} 
                        handleTabChange={handleTabChange}
                    />
                    <VerticalFooter />
                    <AppBuilderVerticalTabContent 
                        {...restProps} 
                        onClickBack={onClickBack} 
                        productInfo={productInfo} 
                        setProductInfo={setProductInfo}
                    />
                </Box>
            </Box>
        </Grid>
    )
}

export default AppBuilderCustomizeTabs;