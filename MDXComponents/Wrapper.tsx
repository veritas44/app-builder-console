import React, {useState} from 'react';
import {MDXProviderProps} from '@mdx-js/react';
import Header from '../components/Header';
import SideBar from './Sidebar';
import {LinkProvider} from './useActiveLink';
import type {ActiveLinkInterface} from './useActiveLink';

function Wrapper(props: MDXProviderProps) {
  const rest = React.Children.toArray(props.children);
  const toc = rest.shift();
  const [link, setLink] = useState<ActiveLinkInterface['link']>('');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Header />
      <LinkProvider value={{link, setLink}}>
        <SideBar />
        <main
          style={{
            margin: '0 20%',
            padding: '0 2rem',
          }}>
          {toc}
          {rest}
        </main>
      </LinkProvider>
    </div>
  );
}

export default Wrapper;
