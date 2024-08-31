document.addEventListener('DOMContentLoaded', function() {
    const flightData = JSON.parse(localStorage.getItem('flightData')) || {};

    document.getElementById('name').textContent = flightData.name || "Avery Davis";
    document.getElementById('from').textContent = flightData.from || "Tokyo, Japan";
    document.getElementById('to').textContent = flightData.to || "London, United Kingdom";
    document.getElementById('time').textContent = flightData.time || "02:00 PM";
    document.getElementById('date').textContent = flightData.date || "15 DEC 2025";
    document.getElementById('gate').textContent = flightData.gate || "A14";
    document.getElementById('seat').textContent = flightData.seat || "15";
    document.getElementById('class').textContent = flightData.class || "Business Class";
});
