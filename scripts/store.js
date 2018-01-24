'use strict';

const store = (function() {
  const videoStore = [];

  const setVideos = function(videos) {
    videos.forEach(video => {
      
      this.videoStore.push(video);
    });
  };

  const getVideos = function() {
    return this.videoStore;
  };

  return {
    videoStore,
    getVideos,
    setVideos
  };
})();