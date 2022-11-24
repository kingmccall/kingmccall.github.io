/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const humburgerBtn = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menue');
const Portfolio = document.querySelectorAll('.card');
const Modal = document.querySelector('.modal-container');
const form = document.querySelector('#contactme');
const userName = document.getElementById('name');
const Email = document.getElementById('email');
const Msg = document.getElementById('message');



humburgerBtn.addEventListener('click', () => {
  humburgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menue > a').forEach((n) => n.addEventListener('click', () => {
  humburgerBtn.classList.remove('active');
  navMenu.classList.remove('active');
}));



function validate() {
  const emailVal = document.getElementById('email').value;
  const regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  // eslint-disable-next-line func-names
  document.forms[0].onsubmit = function (e) {
    if (regx.test(emailVal)) {
      document.querySelector('small').innerHTML = 'Valid';
      document.querySelector('small').style.color = 'green';
    } else {
      document.querySelector('small').innerHTML = 'Invalid! Please enter the email in lower case';
      document.querySelector('small').style.color = 'red';
      e.preventDefault();
    }
  };
}

form.addEventListener('input', () => {
  const contactData = {
    username: userName.value,
    email: Email.value,
    message: Msg.value,
  };
  localStorage.setItem('contact', JSON.stringify(contactData));
});

const getLocalStorageData = JSON.parse(localStorage.getItem('contact'));
userName.value = getLocalStorageData.username;
Email.value = getLocalStorageData.email;
Msg.value = getLocalStorageData.message;

