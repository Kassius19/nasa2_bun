const apiKey = 'cwb2APUGR8AeAdqY1AgiGvTscYh7bOQiBuANkTYq'; 
const imageOfTheDayElement = document.getElementById('image-of-the-day');
const fetchImageButton = document.getElementById('fetch-image');
const dateInput = document.getElementById('date');

async function fetchImageOfTheDay(date) {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    if (date) {
        url += `&date=${date}`;
    }
    const response = await fetch(url);
    const image = await response.json();
    displayImageOfTheDay(image);
}

function displayImageOfTheDay(image) {
    imageOfTheDayElement.innerHTML = ''; 
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-of-the-day';
    imageContainer.innerHTML = `
        <img src="${image.url}" alt="${image.title}">
        <div class="info">
            <h2>${image.title}</h2>
            <p>${image.date}</p>
            <p>${image.explanation}</p>
        </div>
    `;
    imageOfTheDayElement.appendChild(imageContainer);
}

fetchImageButton.addEventListener('click', () => {
    const selectedDate = dateInput.value;
    fetchImageOfTheDay(selectedDate);
});

fetchImageOfTheDay();
