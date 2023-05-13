import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = { searchWord: '' };

  hendelSubmit(searchWord) {
    this.setState({ q: 123 });
  }

  render() {
    return (
      <>
        <Searchbar hendelSubmit={this.hendelSubmit} />
        <ImageGallery searchWord={this.state.searchWord} />
      </>
    );
  }
}
