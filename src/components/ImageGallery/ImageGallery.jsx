import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem.jsx';
import { Loader } from './Loader/Loader';

export class ImageGallery extends Component {
  key = '36365507-24ff3c73b2908c2f05119dccb';

  state = {
    data: [],
    loading: false,
  };

  // reqvestToAPI = async (name, page) => {
  //   return await fetch(
  //     `https://pixabay.com/api/?q=${name}&page=${page}&key=${this.key}&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(response.status);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       return data.hits.map(obj => ({
  //         id: obj.id,
  //         webformatURL: obj.webformatURL,
  //         largeImageURL: obj.largeImageURL,
  //       }));
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //     });
  // };

  componentDidUpdate = async () => {
    this.setState({ loading: true });

    // const data = await this.reqvestToAPI(
    //   this.props.searchWord,
    //   this.props.page
    // );

    fetch(
      `https://pixabay.com/api/?q=${this.props.searchWord}&page=${this.props.page}&key=${this.key}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        return data.hits.map(obj => ({
          id: obj.id,
          webformatURL: obj.webformatURL,
          largeImageURL: obj.largeImageURL,
        }));
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(data =>
        this.setState({
          data: this.props.page > 1 ? [...this.state.data, ...data] : data,
          loading: false,
        })
      );
  };

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        {!this.state.loading && (
          <ul className={css.gallery}>
            <ImageGalleryItem data={this.state.data} />
          </ul>
        )}
      </>
    );
  }
}
