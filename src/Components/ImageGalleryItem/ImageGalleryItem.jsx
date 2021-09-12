import React, { Component } from 'react';

import s from './ImageGalleryItem.module.css';

class ImageGallery extends Component {
  hendleClickImage = e => {
    e.preventDefault();
    const value = e.target;
    //  const ddd = value.data.getAtribut('srcmodal');
    //  console.log(ddd);
    console.log(value);
    //   this.props.clickImage({ this.props.gallery.largeImageURL });
  };
  render() {
    return (
      <>
        {this.props.gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
          //  <a href={{ largeImageURL }} key={id} onClick={this.hendleClickImage}>
          <li
            //  key={id}
            className={s.ImageGalleryItem}
            //   onClick={this.hendleClickImage}
            //   srcmodal={largeImageURL}
          >
            <img
              id={id}
              src={webformatURL}
              alt={tags}
              loading="lazy"
              className={s.ImageGalleryItemImage}
            />
          </li>
          //  </a>
        ))}
      </>
    );
  }
}
export default ImageGallery;
