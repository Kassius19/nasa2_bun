document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = 'cwb2APUGR8AeAdqY1AgiGvTscYh7bOQiBuANkTYq';  
    const apiUrl = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;
    const weatherDataElement = document.getElementById('weather-data');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const sol_keys = data.sol_keys;
        const latestSol = sol_keys[sol_keys.length - 1];
        const solData = data[latestSol];

        weatherDataElement.innerHTML = `
            <h2>Latest Weather at Elysium Planitia (Sol ${latestSol})</h2>
            <p><strong>Date:</strong> ${new Date(solData.First_UTC).toDateString()}</p>
            <p><strong>Season:</strong> ${solData.Season}</p>
            <p><strong>Temperature:</strong> High: ${solData.AT.mx}°C, Low: ${solData.AT.mn}°C</p>
            <p><strong>Pressure:</strong> ${solData.PRE.av} Pa</p>
            <p><strong>Wind Speed:</strong> ${solData.HWS.av} m/s</p>
        `;
    } catch (error) {
        weatherDataElement.innerHTML = '<p>Failed to fetch Mars weather data. Please try again later.</p>';
        console.error('Error fetching Mars weather data:', error);
    }
});
