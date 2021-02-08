import React, {useState} from 'react';
import {MDXProviderProps} from '@mdx-js/react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SideBar from './Sidebar';
import SideBarContent from './SidebarContent';
import {LinkProvider} from './useActiveLink';
import useSmQuerry from '../hooks/useSmQuerry';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import type {ActiveLinkInterface} from './useActiveLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    customDrawer: {
      width: '70vw',
    },
  }),
);

function Wrapper(props: MDXProviderProps) {
  const CustomClasses = useStyles();
  const matches = useSmQuerry();
  const [drawerVisible, setDrawerVisible] = useState(true);
  const rest = React.Children.toArray(props.children);
  const toc = rest.shift();
  const [link, setLink] = useState<ActiveLinkInterface['link']>('');
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1343px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <LinkProvider value={{link, setLink}}>
          {matches ? (
            <SwipeableDrawer
              anchor="left"
              // FiX this
              classes={{paperAnchorLeft: CustomClasses.customDrawer}}
              open={drawerVisible}
              onClose={() => setDrawerVisible(false)}
              onOpen={() => setDrawerVisible(true)}>
              <SideBarContent />
            </SwipeableDrawer>
          ) : (
            <SideBar />
          )}
          <main
            style={
              !matches
                ? {
                    margin: '0 20%',
                    padding: '0 2rem',
                  }
                : {
                    margin: '0 10px',
                  }
            }>
            {toc}
            {rest}
          </main>
        </LinkProvider>
      </div>
    </>
  );
}

export default Wrapper;
