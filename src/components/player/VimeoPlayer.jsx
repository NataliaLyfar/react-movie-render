import { Component } from 'react';
import Player from 'react-player/vimeo';


export class VimeoPlayer extends Component  {
state = {
    isVideoLoaded: false,
};

componentDidUpdate(prevProps){
    if(prevProps.url !== this.props.url){
    this.setState({isVideoLoaded: false});
};
};

render(){
    const {url} = this.props;
    const {isVideoLoaded} = this.state;
    const showLoader = url && !isVideoLoaded;
    const playerSize = isVideoLoaded ? '100%' : 0;
    const playerHeight = isVideoLoaded ? '100%' : 0;
    return (
    <>
    {showLoader && <h2>Loading video...</h2>}
    <Player 
    url={url} 
    width={playerSize}
    height={playerHeight}
    onReady={() => this.setState({isVideoLoaded: true})}
    controls/>
    </>
    )
}
}