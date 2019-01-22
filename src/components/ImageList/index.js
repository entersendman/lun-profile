import React from 'react';
import styles from './ImageList.module.css'
import Image from '../Image';
import images from '../../assets';

const ImageList = ({selectedImage, isValid, onClick}) => (
  <div>
    <div className={styles.imageList}>
      {images.map((image, key) => (
        <Image
          source={image.src}
          key={key}
          onClick={() => onClick(image.src)}
          selectedImage={selectedImage}
        />
      ))}
    </div>
    {
      !isValid && selectedImage && (
        <span className={styles.invalid}>
          Вы выбрали собачку. А надо котика
        </span>
      )
    }
  </div>
);

export default ImageList;
