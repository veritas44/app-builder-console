import React from 'react';
import useSmQuerry from '../hooks/useSmQuerry';

const H6 = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) => {
  const isSm = useSmQuerry();
  return (
    <img
      style={
        props.title === 'inline'
          ? {}
          : {
              display: 'block',
              width: isSm ? '100%' : '60%',
              margin: '30px auto',
            }
      }
      src={props.src}
      alt={props.alt}
    />
  );
};

export default H6;
