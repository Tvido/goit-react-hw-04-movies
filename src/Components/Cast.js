import { Component } from 'react';
import axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const API_KEY = '822df93417c2789fa5aa8e4d6553456b';
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    this.setState({ cast: response.data.cast });
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        <ul className="">
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className="">
              <div className="">
                {profile_path ? (
                  <img
                    className="Actor-img"
                    src={'https://image.tmdb.org/t/p/w400' + profile_path}
                    alt={name}
                  />
                ) : (
                  <p className="">No photo</p>
                )}
              </div>

              <h2>{name}</h2>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
