const modalElement = document.querySelector('.modal-container');
const buttonOpenElement = document.querySelector('.search-button');
const buttonCloseElement = document.querySelector('.modal-close-button');

const openModal = (event) => {
  event.preventDefault();

  modalElement.classList.remove('modal-close');
}

const closeModal = (event) => {
  event.preventDefault();

  modalElement.classList.add('modal-close');
}


buttonOpenElement.addEventListener('click', openModal);
buttonCloseElement.addEventListener('click', closeModal);

//
