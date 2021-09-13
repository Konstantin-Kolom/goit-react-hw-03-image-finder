import React, { Component } from 'react';
// import Loader from '../Loader/Loader';

import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    //  loading: false,
  };

  hendleClickImage = e => {
    this.setState({ loading: true });
    this.props.modalImageData(e.target.parentNode.getAttribute('srcmodal'));
  };

  render() {
    return (
      <>
        {this.props.gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
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
            />
          </li>
        ))}
        {/* {this.state.loading && <Loader />} */}
      </>
    );
  }
}
export default ImageGalleryItem;
