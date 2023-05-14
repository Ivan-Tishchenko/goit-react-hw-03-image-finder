import css from './Modal.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.keyCode === 27) {
      this.props.closeFunc();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return (
      <div className={css.overlay} onClick={this.props.closeFunc}>
        <img className={css.modal} src={this.props.url} alt="modalpicture" />
      </div>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string,
  closeFunc: PropTypes.func,
};
