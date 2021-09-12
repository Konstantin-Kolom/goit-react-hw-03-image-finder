import React, { Component } from 'react';

import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar.jsx';
import ImageGallery from './Components/ImageGallery/ImageGallery.jsx';
import Modal from './Components/Modal/Modal.jsx';

import './App.css';

class App extends Component {
  state = {
    searchValue: '',
    modal: false,
  };

  formSubmit = searchData => {
    this.setState({
      searchValue: searchData,
    });
  };

  //   modalImage = dataImage => {
  //     console.log(dataImage);
  //   };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.formSubmit} />
        <main>
          <ImageGallery search={this.state.searchValue} modalImage={this.modalImage} />
        </main>
        {this.state.modal && <Modal />}
      </div>
    );
  }
}

export default App;
