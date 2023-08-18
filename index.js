let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

const how = document.querySelector(".how")
const sect_1 = document.querySelector(".sect_1")

how.addEventListener('click', () => {
    sect_1.style.display = "block" ;
});
