import React from "react";
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({onImageClick, post}) => {
  const handleClick = () => {
    onImageClick(post);
  };

    return (
      <li key={post.id} className={css.ImageGalleryItem}>
        <img src={post.webformatURL} alt={post.tags} onClick={handleClick} className={css.ImageGalleryItemImage} />
      </li>
    );
};

export default ImageGalleryItem;