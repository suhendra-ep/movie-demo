import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const GenreList = ({genres}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Genre</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {genres.map(genre =>
                    <tr key={genre.genre_id}>
                        <td>{genre.name}</td>
                        <td><Link to={'/genre/' + genre.genre_id}>Edit</Link></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

GenreList.propTypes = {
  genres: PropTypes.array.isRequired
};

export default GenreList;