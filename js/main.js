/*
* Show a random image on page load
*/

// Array of image filenames
var images = [
  'blue-neon.png',
  'corgi-desk.png',
  'foam-art.png',
  'pink-neon.png',
  'reorgs.png'
];

// Generate a random index
var index = Math.floor(Math.random() * images.length);

// Get the img element
var img = document.querySelector('img');

// Set the src attribute to the randomly selected image
img.src = 'img/' + images[index];
