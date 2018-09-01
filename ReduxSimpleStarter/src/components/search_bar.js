import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  // render component
  render() {
    return (
      <div>
        <input onChange={ e => this.setState({ searchTerm: e.target.value }) }/>
      </div>
    );
  }
};

export default SearchBar;
