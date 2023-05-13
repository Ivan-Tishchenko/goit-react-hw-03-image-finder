import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {};

  render() {
    return (
      <>
        {this.props.data?.map(obj => (
          <li className={css.gallery_item}>
            <img src={obj.url} alt={obj.alt} />
          </li>
        ))}
      </>
    );
  }
}
