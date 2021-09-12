import React, { Component } from 'react';
import s from './Button.module.css';

// const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

class Button extends Component {
  myRef = null;

  hendleClick = e => {
    e.preventDefault();
    this.props.onLoadMore(this.props.page + 1);
    this.scrollToMyRef();
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  scrollToMyRef = () => window.scrollTo(0, this.myRef.offsetTop);

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
