let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();

};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//------------------------------------ navbar ----------------------------------------- 

let navbar= document.getElementById("myNav");

if(document.body.scrollTo(0,100)|| document.documentElement.scrollTo(0,100))
{
  navbar.style.display= "none"
}
else{
  navbar.style.display="block"
}


