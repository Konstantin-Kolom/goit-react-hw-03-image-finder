import React, { Component } from 'react';

import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  hendleClickImage = e => {
    //  console.log(e.target.parentNode.getAttribute('srcmodal'));
    this.props.modalImageData(e.target.parentNode.getAttribute('srcmodal'));
  };

  render() {
    return (
      <>
        {this.props.gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
          //  <a href={{ largeImageURL }} key={id} onClick={this.hendleClickImage}>
          <li
            key={id}
            className={s.ImageGalleryItem}
            onClick={this.hendleClickImage}
            srcmodal={largeImageURL}
          >
            <img
              id={id}
              src={webformatURL}
              alt={tags}
              loading="lazy"
              className={s.ImageGalleryItemImage}
              //   srcmodal={largeImageURL}
            />
          </li>
          //  </a>
        ))}
      </>
    );
  }
}
export default ImageGalleryItem;
