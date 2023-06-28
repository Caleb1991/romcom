// Create variables targetting the relevant DOM elements here 👇

// We've provided a few variables below
let savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
let currentCover;

// Add your event listeners here 👇
generateBook();

getElement('.random-cover-button').onclick = function() {
  generateBook();
}

// Create your event handlers and other functions here 👇
function getElement(className) {
  return document.querySelector(className);
}

function generateBook(cover) {
  let coverImage = getElement('.cover-image');
  let coverTitle = getElement('.cover-title');
  let coverTagline1 = getElement('.tagline-1');
  let coverTagline2 = getElement('.tagline-2');
  let bookCover = cover ? cover : createCover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

  coverImage.src = bookCover.coverImg;
  coverTitle.innerHTML = bookCover.title;
  coverTagline1.innerHTML = bookCover.tagline1;
  coverTagline2.innerHTML = bookCover.tagline2;

  currentCover = bookCover
}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}
