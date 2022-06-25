const headerPopup = document.querySelector ('.header_popup')
const headerContainer = document.querySelector ('.header__modal-container');
const closeHeaderBtn = document.querySelector ('.header__btn-submit')
const openModalBtn = document.querySelector(".header_btn");

openModalBtn.addEventListener('click', function() {
  headerContainer.style.display = "block";
});

document.addEventListener('click', (e) => {
  if(e.target === headerContainer) {
    headerContainer.classList.remove('active');
    headerPopup.classList.remove('active');
  }
})

window.addEventListener("keypress", function (e) {
  if (e.keyCode === 27) {
    headerContainer.style.display = "none";
  }
})

document.querySelector('.header__btn-submit').onclick = myClick;
  
function myClick() {
  let name = document.querySelector('.header__btn_name').value;
  console.log(name);
}
function myClick() {
  let name = document.querySelector('.header__btn_email').value;
  console.log(name);
}
function myClick() {
  let name = document.querySelector('.header__btn_textarea').value;
  console.log(name);
}