// Dependencies
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Imported app components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// youtube API key for searches
const YOUTUBE_API_KEY = 'AIzaSyB1ACzPBlhVNVlHxFZgPiJHo4Q9riuV9PI';


// App
class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        }
      );


    });


  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail
          video={this.state.selectedVideo}
        />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
};

// Render App to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
