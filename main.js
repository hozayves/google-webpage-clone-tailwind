import './style.css'
const appBtn = document.querySelector('#googleApp');
const appModal = document.querySelector("[role='google-app']");

const googleAccount = document.querySelector('#gAccount');
const googleModal = document.querySelector("[role='google-account']")

appBtn.addEventListener('click', (e) => {
    let isExpanded = JSON.parse(appBtn.getAttribute('aria-expanded'));
    appBtn.setAttribute('aria-expanded', !isExpanded);
    appModal.classList.toggle('hidden');
    appModal.classList.toggle('flex')
});
googleAccount.addEventListener('click', (e) => {
    let isExpanded = JSON.parse(googleAccount.getAttribute('aria-expanded'));
    googleAccount.setAttribute('aria-expanded', !isExpanded);
    googleModal.classList.toggle('hidden');
    googleModal.classList.toggle('flex')
})
