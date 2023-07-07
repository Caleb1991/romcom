// Create variables targetting the relevant DOM elements here 👇
let randomBookCover = getElement('.random-cover-button');
let saveCoverButton = getElement('.save-cover-button')
let viewSavedButton = getElement('.view-saved-button');
let makeNewButton = getElement('.make-new-button');
let homeButton = getElement('.home-button');
let createNewBookButton = getElement('.create-new-book-button');
let buttonArray = [viewSavedButton, makeNewButton, homeButton];

// We've provided a few variables below
let savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
let currentCover;

// Add your event listeners here 👇
generateBook();
addListenersForButtonClick(buttonArray);

randomBookCover.addEventListener('click', function() {
  generateBook();
});

createNewBookButton.addEventListener('click', function() {
  event.preventDefault();
  let cover = captureFormInputs();
  generateBook(cover);
  saveToRespectiveArrays(currentCover);
  toggleButtons(homeButton.className);
  toggleView(homeButton);
})

saveCoverButton.addEventListener('click', function() {
  saveCover();
})

viewSavedButton.addEventListener('click', function() {
  populateSavedCoversSection();
})

// Create your event handlers and other functions here 👇
function getElement(className) {
  return document.querySelector(className);
}

function toggleButtons(clickedButton) {
  if (homeButton.classList.value.includes('hidden')) {
    homeButton.classList.toggle('hidden');
    randomBookCover.classList.toggle('hidden');
    saveCoverButton.classList.toggle('hidden');
  } else if (clickedButton == 'home-button') {
    homeButton.classList.toggle('hidden');
    randomBookCover.classList.toggle('hidden');
    saveCoverButton.classList.toggle('hidden');
  }
}

function toggleView(clickedButton) {
  let savedView = getElement('.saved-view');
  let homeView = getElement('.home-view');
  let formView = getElement('.form-view');
  let viewArray = [savedView, homeView, formView]
  
  for (let view of viewArray) {
    if (!view.classList.value.includes('hidden')) {
      view.classList.toggle('hidden');
    }
  }

  if (clickedButton === viewSavedButton) {
    savedView.classList.toggle('hidden');
  } else if (clickedButton == makeNewButton) {
    formView.classList.toggle('hidden');
  } else if (clickedButton == homeButton) {
    homeView.classList.toggle('hidden');
  }
}

function addListenersForButtonClick(array) {
  for (let button of array) {
    button.addEventListener('click', function () {
      toggleButtons(this.className);
      toggleView(this);
    })
  }
}

function captureFormInputs() {
  let imgSrc = getElement('.user-cover').value;
  let title = getElement('.user-title').value;
  let descriptor1 = getElement('.user-desc1').value;
  let descriptor2 = getElement('.user-desc2').value;
  return createCover(imgSrc, title, descriptor1, descriptor2);
}

function saveToRespectiveArrays(cover) {
  covers.push(cover.imgSrc);
  titles.push(cover.title);
  descriptors.push(cover.tagline1);
  descriptors.push(cover.tagline2);
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

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function populateSavedCoversSection() {
  let savedCoversSection = getElement('.saved-covers-section');
  savedCoversSection.innerHTML = '';
  for (let cover of savedCovers) {
    savedCoversSection.innerHTML += `<section class="mini-cover">
                                      <img class="cover-image" src=${cover.coverImg}>
                                      <h2 class="cover-title">${cover.title}</h2>
                                      <h3 class="tagline">A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span></h3>
                                      <img class="price-tag" src="./assets/price.png">
                                      <img class="overlay" src="./assets/overlay.png">
                                    </section>`
  }
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
