import React from 'react';

const H6 = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) => {
  console.log('image props', props);
  return (
    <img
      style={{display: 'block', width: '100%', margin: '0 auto'}}
      {...props}
    />
  );
};

export default H6;
