document.addEventListener('DOMContentLoaded', function() {
    // Assuming the flight details are stored in localStorage
    const flightData = JSON.parse(localStorage.getItem('gtml ticket'));

    // Populate the ticket with the stored data or default values
    document.getElementById('name').textContent = flightData?.name || "Avery Davis";
    document.getElementById('from').textContent = flightData?.from || "Tokyo, Japan";
    document.getElementById('to').textContent = flightData?.to || "London, United Kingdom";
    document.getElementById('time').textContent = flightData?.time || "02:00 PM";
    document.getElementById('date').textContent = flightData?.date || "15 DEC 2025";
    document.getElementById('gate').textContent = flightData?.gate || "A14";
    document.getElementById('seat').textContent = flightData?.seat || "15";
    document.getElementById('class').textContent = flightData?.class || "Business Class";

    // Generate a random 12-digit number for the barcode
    const barcodeNumber = Math.floor(100000000000 + Math.random() * 900000000000).toString();

    // Set the barcode image using the barcodeNumber
    const barcodeImage = `https://barcode.tec-it.com/barcode.ashx?data=${barcodeNumber}&code=EAN13&dpi=96`;

    // Set the image source to the barcode
    document.getElementById('barcode').src = barcodeImage;

    // Optionally, display the barcode number on the page
    console.log('Generated Barcode Number:', barcodeNumber);
});
