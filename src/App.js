import React, { Component } from 'react';

import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar.jsx';
import ImageGallery from './Components/ImageGallery/ImageGallery.jsx';
// import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem.jsx';

import './App.css';

class App extends Component {
  state = {
    searchValue: '',
    galleryItem: false,
  };

  formSubmit = searchData => {
    this.setState({
      searchValue: searchData,
    });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.formSubmit} />
        {/* <main> */}
        <ImageGallery search={this.state.searchValue} />
        {/* </main> */}
        {/* <ImageGalleryItem search={this.state.searchValue} /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
