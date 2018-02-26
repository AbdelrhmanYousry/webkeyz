var modal = document.getElementById('myModal');

var btn = document.getElementById("submit");

var close = document.getElementsByClassName("close")[0];

btn.onclick = function(ev) {
	ev.preventDefault();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}