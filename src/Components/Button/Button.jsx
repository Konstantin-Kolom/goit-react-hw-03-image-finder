import React, { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  //   componentWillUnmount() {
  //     this.props.onLoadMore(1);
  //   }

  hendleClick = e => {
    e.preventDefault();
    console.log('dddd');
    this.props.onLoadMore(this.props.page + 1);
    this.scrollTo();
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <button
        type="button"
        className={s.Button}
        onClick={this.hendleClick}
        ref={ref => (this.myRef = ref)}
      >
        Load more
      </button>
    );
  }
}

export default Button;
