// Basculer thème clair/sombre
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.toggle('light');
});

// Gestion formulaire simple
const form = document.getElementById('contactForm');
const notice = document.getElementById('formNotice');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('input[type=text]').value.trim();
  const email = form.querySelector('input[type=email]').value.trim();
  if(!name || !email){
    notice.textContent = 'Veuillez remplir le nom et l\'email.';
    return;
  }
  notice.textContent = `Merci ${name} — message bien reçu (simulation).`;
  form.reset();
});