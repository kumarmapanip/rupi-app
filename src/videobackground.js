import React from 'react';
import './styles.css';
import bgvideo from './water_wave.mp4';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBackground;