

  const modal = document.querySelector('#modal');
const btn = document.querySelector('#openBurger');
const closeBtn = document.querySelector('#closeModal');
const body = document.querySelector('body');

const openModal = () => {

    modal.classList.add('modal__active');
    body.classList.add('lock')

    const closeModal = () => {
        modal.classList.remove('modal__active');
        body.classList.remove('lock')

    }

    const hideModal = (event) => {
        if(event.target === modal) {
            closeModal()
        }



    }


    modal.addEventListener('click', hideModal);
    closeBtn.addEventListener('click', closeModal);

}

btn.addEventListener('click', openModal);

