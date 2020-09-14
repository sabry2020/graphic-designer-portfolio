
//global variable and const s



const directions = [1, -1];
const randomDirection = Math.random() * directions.length;

var docComponents=[]


//Array().fill(200)

//adding ids to the element

//document.body.forEach(element => element.setAttribute('id', 1));
/*
for (let i = 0; i < document.length; i++) {
    
    setAttribute
    docComponents[i]
}
*/

//DOM js 

var navToggle = document.querySelector('.nav-toggle');

var navLinks = document.querySelectorAll('.nav__link');
var logo = document.getElementById('logo');
var image = document.querySelector('.intro__img');

image.addEventListener('click', check);





function check() {
    //setTimeout(check, 10000);
    alert('hello visitor');
}


//function move//Pic//() {}


navToggle.addEventListener('click', tog);  //opening the navbar





navLinks.forEach(link => {
link.addEventListener('click', () => {
    document.body.classList.remove('nav-open')
    })
})//closing the nav bar




function rotate() {
    
    setInterval(() => {


    }, 1000)
}
function tog() {
   //document.nav.classList.add('.nav-open');
  //  document.body.style.backgroundColor = 'green';

    document.body.classList.toggle('nav-open'); 
    


    
}



//adding some functionalities 
//setTimeout() and clearTimeout()
//setInterval()
//setAttribute()
//make at least one object  using constructor -->forEach()
//use Array() to create and array 
