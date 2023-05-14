import React, { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <button
        className={css.button}
        onClick={() => this.props.hendelClick(this.props.currentPage + 1)}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  currentPage: PropTypes.number,
  hendelClick: PropTypes.func,
};
