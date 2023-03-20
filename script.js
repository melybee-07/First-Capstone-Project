const humberger = document.querySelector('.nav3');
const navigation = document.querySelector('third-navbar');

function humfunction(){   humberger.classList.toggle('active');
navigation.classList.toggle('active');
}
humberger.addEventListener('click', humfunction);