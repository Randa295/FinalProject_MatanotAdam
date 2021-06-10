import React from 'react';
import ReactDOM from 'react-dom';
import "./video.css";
import ReactPlayer from 'react-player';


class VideoHome extends React.Component{
  render(){
    return(
      <div className='player-wrapper container col-6 mx-auto d-block  '>
      <ReactPlayer className='react-player'
        playing controls={true}
        url={[
          {src: './video/5e667d3c-e8b2-4973-8cf6-0792efa5a2a9.webm', type: 'video/webm'},
          {src: './video/5e667d3c-e8b2-4973-8cf6-0792efa5a2a9.ogg', type: 'video/ogg'},
          {src: './video/5e667d3c-e8b2-4973-8cf6-0792efa5a2a9.MP4', type: 'video/mp4'}
        ]}
        width='100%'
        height='100%'
      />
      </div>

  )}
};

export default VideoHome;
