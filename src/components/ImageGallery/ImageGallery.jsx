import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem.jsx';

export class ImageGallery extends Component {
  state = { data: [] };

  render() {
    return (
      <ul className={css.gallery}>
        <ImageGalleryItem data={this.state.data} />
      </ul>
    );
  }
}
