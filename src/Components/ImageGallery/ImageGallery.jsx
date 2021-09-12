import React, { Component } from 'react';

import { API_KEY, URL } from '../../Utilits/KEY_pixabay';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    gallery: [],
    page: 1,
    per_page: 12,
    total: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search || prevState.page !== this.state.page) {
      return fetch(
        `${URL}?q=${this.props.search}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`,
      ).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        response.json().then(photo =>
          this.setState(prevState => ({
            gallery: prevState.gallery.concat(photo.hits),
            total: photo.total,
          })),
        );
      });
    }
  }

  loadMore = pageMore => {
    this.setState({ page: pageMore });
  };

  modalImageData = imageSrc => {
    //  console.log(imageSrc);
    this.props.modalImage(imageSrc);
  };

  render() {
    return (
      <>
        {this.state.gallery.length > 0 && (
          <ul className={s.ImageGallery}>
            <ImageGalleryItem gallery={this.state.gallery} modalImageData={this.modalImageData} />
          </ul>
        )}
        {this.state.total > 0 && <Button page={this.state.page} onLoadMore={this.loadMore} />}
      </>
    );
  }
}

export default ImageGallery;
