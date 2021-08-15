// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
   document.querySelector("body").style.overflow = 'visible';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
     document.querySelector("body").style.overflow = 'visible';
  }
}

//click dong model-dialog
$(".closeModel-dialog").click(function (e) { 
  e.preventDefault();
  $(".model-dialog").addClass("active-Upmodel")

  setTimeout(function(){
    $(".model-dialog").hide()
  },600)

  document.querySelector("body").style.overflow = 'visible';
});

//sau 4s se hien model-dialog

