import React from 'react';
import ReactDOM from 'react-dom';

// Imported components
import SearchBar from './components/search_bar';

// youtube API key for searches
const YOUTUBE_API_KEY = 'AIzaSyB1ACzPBlhVNVlHxFZgPiJHo4Q9riuV9PI';

// App
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
// Render App to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
