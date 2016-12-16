
// Get the modal
    var modal = document.getElementById('ic_3d_rotation_24px_modal');

    // Get the button that opens the modal
    var btn = document.getElementById("ic_3d_rotation_24px");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("ic_3d_rotation_24px_close")[0];

     // When the user clicks on the button, open the modal  / scroll oculto ( del body)
    btn.onclick = function(){ modal.style.display = "block"; document.body.style.overflow = "hidden"; }


    // When the user clicks on <span> (x), close the modal / scroll visible  ( del body)
    span.onclick = function(){ modal.style.display = "none"; document.body.style.overflow = "scroll"; }

    // When the user clicks anywhere outside of the modal, close it / scroll visible  ( del body)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; document.body.style.overflow = "scroll";
        }
    }
