let DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
let DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
let LIST_ITEM_LINK_SELECTOR = '[data-image-role="trigger"]';


// задать изображение и название для увеличенного изображения
function setDetails(imageUrl, titleText) {
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    let detailText = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailText.textContent = titleText;
}

// получаю URL изображения
function imageFromCities(city) {
    return city.getAttribute('data-image-url')
}

// получаю текст изображения
function titleFromCities(city) {
    return city.getAttribute('data-image-title')
}

// получаю изображение и текст и объединяю
function setDetailsFromCities(city) {
    setDetails(imageFromCities(city), titleFromCities(city))
}

let first = document.querySelector(DETAIL_IMAGE_SELECTOR)
console.log(first)
first.addEventListener('click', function () {
    console.log('work')
})

let second = document.querySelectorAll(LIST_ITEM_LINK_SELECTOR)
console.log(second)
second.forEach(item=> {
    item.addEventListener('click', function () {
        console.log('wwwwwwwwww')
    })
})

// прослушиватель событий
function addClickHandler(city) {
    city.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromCities(city);
    })
}

// //  массив
function makeArrayFromCities() {
    let cities = document.querySelectorAll(LIST_ITEM_LINK_SELECTOR);
    let citiesArray = Array.from(cities);
    console.log(citiesArray)
    return citiesArray
}

// // цикл по массиву
function initializeEvents() {
    let city = makeArrayFromCities();
    city.forEach(addClickHandler)
}
//
initializeEvents();