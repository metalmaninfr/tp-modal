const modal = document.querySelector('.modal-background');
const modalCenter = document.querySelector('.modal-center');
const button = document.querySelector('.button');


button.addEventListener('click', function(){
  modal.classList.add('is-open');
  modalCenter.classList.add('is-open');
});


modal.addEventListener('click', function(){
  modal.classList.remove('is-open');
  modalCenter.classList.remove('is-open');
})
