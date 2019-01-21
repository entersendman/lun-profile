import React from 'react';
import styles from './Image.module.css';

const Image = ({source, selectedImage, onClick}) => {
  const activeImage = selectedImage === source;
  const activeImageStyle = activeImage
    ? ([styles.imageContainer, styles.active].join(' '))
    : styles.imageContainer;
  return (
    <div
      className={activeImageStyle}
      onClick={() => onClick(source)}
    >
      <img src={source} alt=""/>
    </div>
  );
};

export default Image;
