'use strict';

const store = (function() {
  const videos = [];

  const setVideos = function(videos) {
    videos.forEach(video => {
      this.videos.push(video);
    });
  };

  return {
    videos,
    setVideos
  };
})();
