// Deployment ID
// AKfycbwYDd-dC_WASrgB8NimsVRDQmUlStJWBobyedjIuOoElA_b_26jZg-g6dDFct3z2oag


const scriptURL = 'https://script.google.com/macros/s/AKfycbwYDd-dC_WASrgB8NimsVRDQmUlStJWBobyedjIuOoElA_b_26jZg-g6dDFct3z2oag/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');


form.addEventListener('submit', e => {
    e.preventDefault();

    msg.textContent = "Sending...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.textContent = "Message sent successfully";
            setTimeout(() => {
                msg.textContent = "";
            }, 3000);
            form.reset();
        })
        .catch(error => {
            msg.textContent = "Something went wrong!";
            setTimeout(() => {
                msg.textContent = "";
            }, 3000);
            form.reset();
        });
});