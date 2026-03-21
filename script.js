const map = L.map('map').setView([37.35, -121.9], 10);

// Ajouter le fond de carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Récupérer les capteurs depuis le backend
fetch('http://localhost:5000/sensors')
    .then(res => res.json())
    .then(data => {
        data.forEach(sensor => {
            L.marker([sensor.Latitude, sensor.Longitude])
                .addTo(map)
                .bindPopup(`Freeway: ${sensor.Freeway}<br>Direction: ${sensor.Direction}`);
        });
    });