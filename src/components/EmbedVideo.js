import React from 'react';

const EmbedVideo = ({ videoUrl }) => {
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
        title="SharePoint Video"
      />
    </div>
  );
};

export default EmbedVideo;
