'use strict';


// const store = {
//   videos: []
// };

// TASK: Add the Youtube Search Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
// const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
// const fetchVideos = function(searchTerm, callback) {
//   const query = {
//     part: 'snippet',
//     q: searchTerm,
//     key: API_KEY
//   };

//   $.getJSON(BASE_URL, query, callback);
// };

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
// const decorateResponse = function(response) {
//   const results = response.items.map(item => {
//     return {
//       id: item.id.videoId,
//       title: item.snippet.title,
//       thumbnail: item.snippet.thumbnails.high.url
//     };
//   });
//   store.setVideos(results);
//   render();
// };

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
// const generateVideoItemHtml = function(video) {
//   return `
//     <div>
//       <h2>
//       <img src="${video.thumbnail}">
//       <p data-item-id="${video.id}">${video.title}</p>
//     </div>
//   `;
// };

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
// const addVideosToStore = function(videos) {
//   videos.forEach(video => {
//     store.videos.push(video);
//   });
// };

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
// const render = function() {
//   const results = store.videos.map(video => {
//     return generateVideoItemHtml(video);
//   });
//   $('.results').html(results);
// };

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
// const handleFormSubmit = function() {
//   $('form').on('submit', event =>{
//     event.preventDefault();
//     const searchTerm = $('#search-term').val();
//     $('#search-term').val('');
//     store.fetchVideos(searchTerm, decorateResponse);
//   });
// };

// When DOM is ready:
$(function () {
  // TASK:
  videoList.bindEventListeners();
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
