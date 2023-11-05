import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from 'components/ImageGallery/ImageGallery.module.css';


const ImageGallery = ({onImageClick, posts}) => {

    return (
      <ul className={css.ImageGallery}>
        {posts !== null && posts.map((post) => (
          <ImageGalleryItem key={post.id} post={post} onImageClick={onImageClick}/>
        ))}
      </ul>
    );
};

export default ImageGallery;