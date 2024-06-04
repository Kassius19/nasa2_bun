const apiKey = 'cwb2APUGR8AeAdqY1AgiGvTscYh7bOQiBuANkTYq'; 
const galleryElement = document.getElementById('gallery');

async function fetchNasaImages() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`);
    const images = await response.json();
    displayImages(images);
}

function displayImages(images) {
    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.title}">
            <div class="info">
                <h2>${image.title}</h2>
                <p>${image.date}</p>
            </div>
        `;
        galleryElement.appendChild(galleryItem);
    });
}

fetchNasaImages();
