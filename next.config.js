const slug = require('rehype-slug');
const toc = require('@jsdevtools/rehype-toc');
// const toc = require('./transforms/toc');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      slug,
      [
        toc,
        {
          headings: ['h2', 'h3'],
        },
      ],
    ],
  },
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
