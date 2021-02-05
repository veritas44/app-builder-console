import React, {useState} from 'react';
import {MDXProviderProps} from '@mdx-js/react';
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';
import SideBar from './Sidebar';
import {LinkProvider} from './useActiveLink';
import useSmQuerry from '../hooks/useSmQuerry';
import type {ActiveLinkInterface} from './useActiveLink';

function Wrapper(props: MDXProviderProps) {
  const matches = useSmQuerry();
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
        <Header />
        <LinkProvider value={{link, setLink}}>
          {matches ? '' : <SideBar />}
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
        {matches ? <BottomBar /> : ''}
      </div>
    </>
  );
}

export default Wrapper;
