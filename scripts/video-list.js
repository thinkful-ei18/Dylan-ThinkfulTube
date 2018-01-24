'use strict';

const videoList = (function() {
  const generateListItem = function(video) {
    return `
    <li data-item-id="${video.id}">
      <h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p>${video.title}</p>
      <a href="https://www.youtube.com/channel/${video.channelId}"<p>Watch more from this channel</p></a>
    </li>
  `;
  };

  const render = function() {
    const results = store.videoStore.map(video => {
      return generateListItem(video);
    });
    $('.results').html(results);
  };

  const handleFormSubmit = function() {
    $('form').on('submit', event => {
      event.preventDefault();
      const searchTerm = $('#search-term').val();
      api.fetchVideos(searchTerm, response => {
        $('#search-term').val('');
        const videos = decorateVideoResponse(response);
        store.setVideos(videos);
        render();
      });
    });
  };

  const decorateVideoResponse = function(response) {
    const results = response.items.map(item => {
      return { id: item.id.videoId, title: item.snippet.title, thumbnail: item.snippet.thumbnails.high.url, channelId: item.snippet.channelId };
    });
    return results;
  };

  const bindEventListeners = function() {
    handleFormSubmit();
  };

  return {
    render,
    bindEventListeners
  };
})();
