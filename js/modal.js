// Get the modals and buttons
const modals = document.querySelectorAll('.modal');
var modalBtn = document.querySelectorAll('.trinket__link');
var closeBtn = document.querySelectorAll('.closeBtn');

// Loop to handle all modals except the last one in the list
for (var i = 0; i < modals.length - 1; ++i)
{
    // Listen for open click and then open the modal
    modalBtn[i].addEventListener('click', openModal);
    function openModal() {
        modals[i].style = 'display: block';
    }

    // Listen for close click and then close the modal
    closeBtn[i].addEventListener('click', closeModal);
    function closeModal() {
        modals[i].style = 'display: none';
    }

    // Listen for outside click and then close the modal 
    window.addEventListener('click', outsideClick);
    function outsideClick(e) {
        if(e.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}

// Handle the last modal in the list
modalBtn[modals.length-1].addEventListener('click', openModal);
function openModal() {
    modals[modals.length-1].style = 'display: block';
}

closeBtn[modals.length-1].addEventListener('click', closeModal);
function closeModal() {
    modals[modals.length-1].style = 'display: none';
}

window.addEventListener('click', outsideClick);
function outsideClick(e) {
    if(e.target == modals[modals.length-1]) {
        modals[modals.length-1].style.display = 'none';
    }
}
