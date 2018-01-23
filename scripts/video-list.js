'use strict';

const videoList = (function() {
  const generateListItem = function(video) {
    return `
    <li data-item-id="${video.id}">
      <h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${
        video.id
      }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p>${video.title}</p>
      
    </li>
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
