import { Component } from "react";
import { VimeoPlayer } from "components/player/VimeoPlayer";
import { Container } from "components/container";
import { Videos } from "components/videos/Videos";
import videos from 'data/videos.json'

export class App extends Component {
  state = {
selectedVideo: null,
  };

  selectVideo = link => this.setState({selectedVideo: link})
  render(){
    const { selectedVideo } = this.state;

    return (
    <Container>
      <h1>Selected video: {selectedVideo}</h1>
      <Videos
       items={videos}
       onSelect={this.selectVideo}
       selected={this.state.selectedVideo}/>
       {selectedVideo && <VimeoPlayer url={selectedVideo}/>}
    </Container>
    )
  }
}
