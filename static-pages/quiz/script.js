let modal = document.querySelector('.modal');
let modalBack = document.querySelector('.modal--background');
let modalBtn = document.querySelector('.modal--close');
let showModalBtn = document.querySelector('.show--modal');

const closeModalFunc = (e) => {
  if (e.target != modal) {
    console.log('hello');
    modal.classList.remove('modal--open');
  }
};

showModalBtn &&
  showModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--open');
  });

modalBack && modalBack.addEventListener('click', (e) => closeModalFunc(e));
modalBtn && modalBtn.addEventListener('click', (e) => closeModalFunc(e));