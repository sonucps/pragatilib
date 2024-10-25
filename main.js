const scriptURL = 'https://script.google.com/macros/s/AKfycbyF_5j9eu_4Uw6S5P3RGJ9GRRK4Y9E01kl6iwAaPfixa2lcDjOBkaY4I3869inWRRFC0g/exec';
    const form = document.forms['google-sheet'];
    const uploadForm = document.getElementById('uploadForm');
    const paymentSection = document.getElementById('paymentSection');
    const uploadSection = document.getElementById('uploadSection');
    const thankyouMessage = document.getElementById('thankyouMessage');
    const regform = document.getElementById('regform');

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                regform.style.display = "none"; // Hide form
                paymentSection.style.display = "block"; // Show payment section
                uploadSection.style.display = "block"; // Show screenshot upload section
            })
            .catch(error => console.error('Error!', error.message));
    });

    // Handle the screenshot upload
    uploadForm.addEventListener('submit', e => {
        e.preventDefault();
        const uploadData = new FormData(uploadForm);

       
        fetch(scriptURL, { method: 'POST', body: uploadData })
            .then(response => {
                paymentSection.style.display = "none"; // Hide payment section
                uploadSection.style.display = "none"; // Hide upload section
                thankyouMessage.style.display = "block"; // Show thank you message
            })
            .catch(error => console.error('Error!', error.message));
    });

    function closeThankYou() {
        thankyouMessage.style.display = 'none';
        form.reset(); // Reset form after submission
        uploadForm.reset(); // Reset upload form after submission
    }