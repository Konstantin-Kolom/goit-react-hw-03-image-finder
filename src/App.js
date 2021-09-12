import React, { Component } from 'react';

import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar.jsx';
import ImageGallery from './Components/ImageGallery/ImageGallery.jsx';
import Modal from './Components/Modal/Modal.jsx';

import './App.css';

class App extends Component {
  state = {
    searchValue: '',
    showModal: false,
    srsModalImage: '',
  };

  formSubmit = searchData => {
    this.setState({
      searchValue: searchData,
    });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  modalImage = dataImage => {
    this.setState({ srsModalImage: dataImage, showModal: true });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.formSubmit} />
        <main>
          <ImageGallery search={this.state.searchValue} modalImage={this.modalImage} />
        </main>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.srsModalImage} alt="" />
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
