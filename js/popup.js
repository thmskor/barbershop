let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");

let login = popup.querySelector("[name=login]");
let password = popup.querySelector("[name=password]");
let form = popup.querySelector("form");


let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
}
catch (err) {
    isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
        password.focus();
    }
    else {
        login.focus();
    }
})

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error")
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error"); 
    }
    else {
        if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
        evt.preventDefault();
        if(popup.classList.contains("modal-show")) 
        {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error"); 

        }
    }
})

let mapLink = document.querySelector(".contacts-button-map");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
})


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

/* Text us form */

let formTextUs = document.querySelector(".submit-button-2");
let popup3 = document.querySelector(".modal-text-us");
let close3 = popup3.querySelector(".modal-close");

formTextUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup3.classList.add("modal-show-text-us");
    
})

close3.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup3.classList.remove("modal-show-text-us");
    popup3.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error")
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error"); 
    }
    else {
        if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
        evt.preventDefault();
        if(popup3.classList.contains("modal-show-text-us")) 
        {
            popup3.classList.remove("modal-show-text-us");
            popup3.classList.remove("modal-error"); 

        }
    }
})