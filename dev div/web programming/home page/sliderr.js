// Get slider items | array.form[ES6 feature]
var sliderimagess = Array.from(document.querySelectorAll('.slider-containerr img'));

 // Get number of slides
 var slidescountt = sliderimagess.length; 

 // set current slide
 var currentslidee = 1;

 // slide number element
var slidenumberelementt = document.getElementById('slide-numberr');

// perv & nextt button
var nexttbuttonn = document.getElementById('nextt'), 
    prevvtbuttonn = document.getElementById('prevv');

// handle click on prevv and nextt buttons

nexttbuttonn.onclick = nexttslide;
prevvtbuttonn.onclick = prevvslide;

// create the main ul element
var paginatonelementt = document.createElement('ul');

// set id in the created ul
paginatonelementt.setAttribute('id','pagination-ul');

// number on li inside ul

for (var i = 1; i <= slidescountt; i++){

    // create the li
    var paginatonitemm = document.createElement('li');

    // set custom attributue
    paginatonitemm.setAttribute('data-index', i);

    // set item content
    paginatonitemm.appendChild(document.createTextNode(i));

    // append item to the main list
    paginatonelementt.appendChild(paginatonitemm);

    
}

// add the created ul to the page
document.getElementById('indicatorss').appendChild(paginatonelementt);

// get the new created ul
var paginationcreatedull = document.getElementById('pagination-ul');

// get pagination item | Array.form
var paginationbullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop for all bullets
for (var i = 0; i < paginationbullets.length; i++){

    paginationbullets[i].onclick = function () {
        currentslidee = parseInt(this.getAttribute('data-index'));

        thecheckerr();
    }
}

// trigger the checker function
thecheckerr();

// nextt slide function
function nexttslide(){
     
    if (nexttbuttonn.classList.contains('disabled')){
        
        return false;

    }else {
        currentslidee++;
        thecheckerr();
    }
}

// prevv slide function
function prevvslide(){

    if (prevvtbuttonn.classList.contains('disabled')){
      
        return false;

    }else {
        currentslidee--;
        thecheckerr();
    }
}




// created the checker function
function thecheckerr() {
    // set the slide number
    slidenumberelementt.textContent = 'slide #' + (currentslidee) + ' of ' + (slidescountt);

    // remove all active classes
    removeallactivee();

    // set active class on current slide
    sliderimagess[currentslidee - 1].classList.add('active')

    // set active class on current pagination item
    paginationcreatedull.children[currentslidee - 1].classList.add('active');

    // check if the current is the first
    if (currentslidee == 1) {

        // add disabled class 
        prevvtbuttonn.classList.add('disabled');
    } else {
        prevvtbuttonn.classList.remove('disabled');
        
    }

    if (currentslidee == slidescountt) {

        // add disabled class 
        nexttbuttonn.classList.add('disabled');

    } else {
        nexttbuttonn.classList.remove('disabled');
    }

}

// remove all active class from imgs and pagination
function removeallactivee() {
    // loop for images
    sliderimagess.forEach(function (img){
        img.classList.remove('active');
    });


// loop for pagination bullets

paginationbullets.forEach(function(bullet) {
    bullet.classList.remove('active');
});
}