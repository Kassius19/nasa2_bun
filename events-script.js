const apiKey = 'cwb2APUGR8AeAdqY1AgiGvTscYh7bOQiBuANkTYq';
const eventsElement = document.getElementById('events');
const searchButton = document.getElementById('search-button');
const missionKeywords = document.getElementById('mission-keywords');

async function fetchEvents(keyword) {
    let url = `https://images-api.nasa.gov/search?q=${keyword}&media_type=image,video&year_start=${new Date().getFullYear()}&year_end=${new Date().getFullYear()}`;
    const response = await fetch(url);
    const data = await response.json();
    displayEvents(data.collection.items.slice(0, 12));
}

function displayEvents(events) {
    eventsElement.innerHTML = '';
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        const { data, links } = event;
        eventElement.innerHTML = `
            <h2>${data[0].title}</h2>
            <p class="date">${new Date(data[0].date_created).toLocaleDateString()}</p>
            <p><img src="${links[0].href}" alt="${data[0].title}" class="event-image"></p>
            <p>${data[0].description}</p>
        `;
        eventsElement.appendChild(eventElement);
    });
}

searchButton.addEventListener('click', () => {
    const selectedKeyword = missionKeywords.value;
    fetchEvents(selectedKeyword);
});
