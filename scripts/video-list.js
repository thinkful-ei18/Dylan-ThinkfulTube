'use strict';

const videoList = (function() {

  const generateListItem = function(video) {
    return `
    <div>
      <h2>
      <img src="${video.thumbnail}">
      <p data-item-id="${video.id}">${video.title}</p>
    </div>
  `;
  };

  const render = function() {
    const results = store.videos.map(video => {
      return generateListItem(video);
    });
    $('.results').html(results);
  };

  const handleFormSubmit = function() {
    $('form').on('submit', event => {
      event.preventDefault();
      const searchTerm = $('#search-term').val();
      $('#search-term').val('');
      api.fetchVideos(searchTerm, response => {
        store.setVideos(response);
        render();
      });
      
    });
  };

  const bindEventListeners = function() {
    handleFormSubmit();
  };


  return {
    render,
    bindEventListeners
  };


})();