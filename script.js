const img1 = document.querySelector('#ham-menu');
const ul = document.querySelector('ul');
const para = document.querySelector('#para');
para.textContent ="X";
para.style.color = "white";
const links = document.querySelectorAll('.nav-link');
const parentNav = document.querySelector('.nav-div');
img1.addEventListener('click', function(){
    parentNav.appendChild(ul);
    ul.style.display = "block";
    for(let i=0; i<links.length; i++){
        links[i].style.display = "block";

    }
})
para.addEventListener("click", function(){
    ul.style.display ="none";
})

