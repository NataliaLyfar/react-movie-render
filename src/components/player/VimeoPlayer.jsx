import Player from 'react-player/vimeo';

export const VimeoPlayer = ({url}) => {
    return <Player url={url} controls/>
}