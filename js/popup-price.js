let mapLink2 = document.querySelector(".mapp-link");
let mapPopup2 = document.querySelector(".modal-map");
let mapClose2 = mapPopup2.querySelector(".modal-close");

mapLink2.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup2.classList.add("modal-show");
});

mapClose2.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup2.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (mapPopup2.classList.contains("modal-show")) {
            mapPopup2.classList.remove("modal-show");
        }
    }
})