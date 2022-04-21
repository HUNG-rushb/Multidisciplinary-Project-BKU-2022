const sideMenu = document.query.Selector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const turnonoff = document.querySelector("turn-on-off"); 
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

turnonoff.addEventListener('click', () => {
    turnonoff.querySelector('h5:nth-child(1)').classList.toggle('active');
    turnonoff.querySelector('h5:nth-child(2)').classList.toggle('active');
})