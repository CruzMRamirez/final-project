let open = document.getElementsByClassName("modal-map-button");
let close = document.getElementsByClassName("btn_close");
let modal = document.getElementsByClassName("map-modal");

function open_modal() {
    modal[0].style.display = "flex";
}

function close_modal() {
    modal[0].style.display = "none";
}

close[0].addEventListener("click", close_modal);
open[0].addEventListener("click", open_modal);