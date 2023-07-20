'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//const btnsOpenModal = document.querySelector('.show-modal')  // shows only first show-modal
const btnsOpenModal = document.querySelectorAll('.show-modal'); // shows all values with show-modal

const openm = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); // here modal--> see 4 line    &    classlist is a property

  overlay.classList.remove('hidden');
};
const clos = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openm);
  btnCloseModal.addEventListener('click', clos);
  // overlay.addEventListener('click',function(){
  //     modal.classList.add('hidden')                          // big way     close modal
  //     overlay.classList.add('hidden')
  // })
  overlay.addEventListener('click', clos); // easy way      close modal
}

document.addEventListener('keydown', function (e) {
  //console.log('jhbahcj');
  //console.log(e.key);
  // ---------------
  //   if (e.key === 'Escape') {
  //     if (!modal.classList.contains('hidden')) {
  //       clos();
  //     }
  //   }
  //          or use
  if (e.key === 'Escape' && !modal.classList.contains('hiden')) {
    clos();
  }
});
