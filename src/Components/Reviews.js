import { Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const API_KEY = '822df93417c2789fa5aa8e4d6553456b';
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    console.log(response.data.results);
    this.setState({ authors: response.data.results });
  }

  render() {
    const { authors } = this.state;

    return (
      <>
        <ul>
          {!authors.length ? (
            <h2>No reviews</h2>
          ) : (
            authors.map(author => (
              <li key={author.id}>
                <h2>Author: {author.author}</h2>
                <p>'{author.content}'</p>
              </li>
            ))
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
