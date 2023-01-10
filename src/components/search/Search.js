import { Component } from "react";

import './search.scss';

class Search extends Component {

    state = {
        term: ''
    }

    onValueChange = (e) => {
        const localTerm = e.target.value;
        this.setState({
            term: localTerm
        })
        this.props.onUpdateSearch(localTerm)
    }

    render() {
        const {term} = this.state;
        return (
            <div className="search-form">
                <label className="search-form__label">Looking for
                    <input
                        type="text"
                        onChange={this.onValueChange}
                        value={term}
                        className="search"
                        placeholder="start typing here..."
                    />
                </label>
            </div>
        )
    }
}

export default Search;

