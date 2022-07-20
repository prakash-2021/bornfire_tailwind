const hamIcon = document.getElementById('hamIcon');
const nav = document.getElementById('navigation')
hamIcon.addEventListener('click', ()=>{
    hamIcon.classList.toggle('crossIcon');
    nav.classList.toggle('active')
    document.querySelector('body').classList.toggle("overflow-hidden");
    document.querySelector('.logo-box').classList.toggle('opacity-0')
    document.querySelector('.hide').classList.toggle('opacity-0')
})
