// Get slider items | array.form[ES6 feature]
var sliderimages = Array.from(document.querySelectorAll('.slider-container img'));

 // Get number of slides
 var slidescount = sliderimages.length; 

 // set current slide
 var currentslide = 1;

 // slide number element
var slidenumberelement = document.getElementById('slide-number');

// perv & next button
var nextbutton = document.getElementById('next'), 
    prevtbutton = document.getElementById('prev');

// handle click on prev and next buttons

nextbutton.onclick = nextslide;
prevtbutton.onclick = prevslide;

// create the main ul element
var paginatonelement = document.createElement('ul');

// set id in the created ul
paginatonelement.setAttribute('id','pagination-ul');

// number on li inside ul

for (var i = 1; i <= slidescount; i++){

    // create the li
    var paginatonitem = document.createElement('li');

    // set custom attributue
    paginatonitem.setAttribute('data-index', i);

    // set item content
    paginatonitem.appendChild(document.createTextNode(i));

    // append item to the main list
    paginatonelement.appendChild(paginatonitem);

    
}

// add the created ul to the page
document.getElementById('indicators').appendChild(paginatonelement);

// get the new created ul
var paginationcreatedul = document.getElementById('pagination-ul');

// get pagination item | Array.form
var paginationbullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop for all bullets
for (var i = 0; i < paginationbullets.length; i++){

    paginationbullets[i].onclick = function () {
        currentslide = parseInt(this.getAttribute('data-index'));

        thechecker();
    }
}

// trigger the checker function
thechecker();

// next slide function
function nextslide(){
     
    if (nextbutton.classList.contains('disabled')){
        
        return false;

    }else {
        currentslide++;
        thechecker();
    }
}

// prev slide function
function prevslide(){

    if (prevtbutton.classList.contains('disabled')){
      
        return false;

    }else {
        currentslide--;
        thechecker();
    }
}




// created the checker function
function thechecker() {
    // set the slide number
    slidenumberelement.textContent = 'slide #' + (currentslide) + ' of ' + (slidescount);

    // remove all active classes
    removeallactive();

    // set active class on current slide
    sliderimages[currentslide - 1].classList.add('active')

    // set active class on current pagination item
    paginationcreatedul.children[currentslide - 1].classList.add('active');

    // check if the current is the first
    if (currentslide == 1) {

        // add disabled class 
        prevtbutton.classList.add('disabled');
    } else {
        prevtbutton.classList.remove('disabled');
        
    }

    if (currentslide == slidescount) {

        // add disabled class 
        nextbutton.classList.add('disabled');

    } else {
        nextbutton.classList.remove('disabled');
    }

}

// remove all active class from imgs and pagination
function removeallactive() {
    // loop for images
    sliderimages.forEach(function (img){
        img.classList.remove('active');
    });


// loop for pagination bullets

paginationbullets.forEach(function(bullet) {
    bullet.classList.remove('active');
});
}