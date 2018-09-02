import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  // handle input change
  onInputChange(term) {
    this.setState({ searchTerm: term});
    this.props.onSearchTermChange(term);
  }

  // render component
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }
};

export default SearchBar;
