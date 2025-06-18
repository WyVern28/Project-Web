let Email = document.querySelector('label');
const Name = document.querySelector('label');

const Submit = document.querySelector('button[type="button"]');
Submit.addEventListener('click', function () {
    if(Email.checked === false && Name.checked === false){
        alert('INSERT YOUR EMAIL & YOUR NAME!!!!!');
    } 
})