'use strict';

const api = (function() {
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const fetchVideos = function(searchTerm, callback) {
    const query = { part: 'snippet', q: searchTerm, key: API_KEY };

    $.getJSON(BASE_URL, query, response => {
      const videos = decorateResponse(response);
      callback(videos);
    });
  };

  const decorateResponse = function(response) {
    const results = response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url
      };
    });
    return results;
  };

  return {
    fetchVideos
  };

})();
