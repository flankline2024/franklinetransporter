function shareWebsiteInfo() {
    // Get the values from your form or variables
    const vehicle = document.getElementById('vehicle').value; // Assuming a vehicle input field
    const fromCounty = document.getElementById('fromCounty').value; // From country
    const toCounty = document.getElementById('toCounty').value; // To country
    const cost = document.getElementById('cost').value; // Approximate cost field
    const whatsappPhoneNumber = '254723971206';
    
    // Build the message to include in the PDF
    const message = `am making order to this transport service!\n\nVehicle: ${vehicle}\nFrom: ${fromCounty}\nTo: ${toCounty}\nCost: ${cost}`;
    
    // Generate the PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text(message, 10, 10); // Add the message to the PDF at coordinates (10, 10)
    
    // Save the PDF to the browser as a file
    doc.save('Transport_Service_Details.pdf'); // File will be named "Transport_Service_Details.pdf"
    
    // Create the message with the PDF link (for email/WhatsApp sharing)
    const pdfLink = 'https://example.com/your-pdf-link'; // Here you can use a URL where users can download the PDF or store it on a server
    const shareMessage = `Check out this transport service!\n\nVehicle: ${vehicle}\nFrom: ${fromCounty}\nTo: ${toCounty}\nCost: ${cost}\nYou can download the PDF here: ${pdfLink}`;
    
    // Define email and WhatsApp sharing links with the PDF link
    const emailLink = `mailto:kingij632@gmail.com?subject=am making order to this transport service=${encodeURIComponent(shareMessage)}`;
    const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(shareMessage)}`;
    // Prompt the user to choose Email or WhatsApp
    const userChoice = confirm("Would you like to share the PDF via Email? Click 'OK' for Email, 'Cancel' for WhatsApp.");

    if (userChoice) {
        // Open Email client via mailto with the link to the PDF
        window.location.href = emailLink;
    } else {
        // Open WhatsApp via WhatsApp Web with the PDF link
        window.location.href = whatsappLink;
    }
}