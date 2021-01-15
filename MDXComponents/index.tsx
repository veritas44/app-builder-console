import wrapper from './Wrapper';
import {Components as MDXComponents} from '@mdx-js/react';
import h1 from './H1';
import h2 from './H2';
import h3 from './H3';
import h4 from './H4';
import h5 from './H5';
import h6 from './H6';
import p from './P';
import li from './Li';
import code from './Code';
import a from './A';

const components: MDXComponents = {
  a,
  wrapper,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  code,
};

export default components;
