import React from 'react';

const H6 = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) => {
  return (
    <img
      style={
        props.title === 'inline'
          ? {}
          : {display: 'block', width: '100%', margin: '0 auto'}
      }
      src={props.src}
      alt={props.alt}
    />
  );
};

export default H6;
