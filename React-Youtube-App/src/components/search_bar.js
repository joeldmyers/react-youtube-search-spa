import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'Search videos...'
    };
  }

  // handle input change
  onInputChange(term) {
    this.setState({ searchTerm: term});
    this.props.onSearchTermChange(term);
  }

  onClickSearchBar(searchTerm) {
    if (searchTerm === 'Search videos...') {
      this.setState({searchTerm: ''});
    }
  }

  onBlurSearchBar(searchTerm) {
    if (searchTerm === '') {
      this.setState({searchTerm: 'Search videos...'});
    }
  }

  // render component
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onFocus={() => this.onClickSearchBar(this.state.searchTerm)}
          onBlur={() => this.onBlurSearchBar(this.state.searchTerm)}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }
};

export default SearchBar;
