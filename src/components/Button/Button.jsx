import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.hendelClick(this.props.currentPage + 1)}
      >
        Load more
      </button>
    );
  }
}
