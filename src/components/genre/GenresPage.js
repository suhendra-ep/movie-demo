import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as genreActions from '../../actions/genreActions';
import GenreList from './GenreList';
import { browserHistory } from 'react-router';

class GenresPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddGenrePage = this.redirectToAddGenrePage.bind(this);
    }

    redirectToAddGenrePage() {
        browserHistory.push('/genre');
    }

    render() {
        const {genres} = this.props;
        console.log({genres})
        return (
            <div>
                <h1>Genres</h1>
                <input type="submit"
                    value="Add Genres"
                    className="btn btn-primary"
                    onClick={this.redirectToAddGenrePage} />
                <GenreList genres={genres} />
            </div>
        )
    }
}


GenresPage.propTypes = {
    genres: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        genres: state.genres
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(genreActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresPage);