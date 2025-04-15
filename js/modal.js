window.addEventListener('DOMContentLoaded',() =>{

    //Modal 
    const modalOpenBtns = document.querySelectorAll('[data-modal]');
        modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('[data-modal-close]');
    modalContent = document.querySelector('.modal-content');

    function openModal (){
        modal.classList.add('active')
        modal.classList.remove('hide')
         // Modal ochilganda bodyni scroll bo'layapti
        document.body.style.overflow = 'hidden'
    }

    function closeModal (){
        modal.classList.add('hide')
        modal.classList.remove('active')
         // Modal yopilganda bodyni scroll bo'layapti yani qotip qovotti shunga hiddin olib tashlaymiz 
        document.body.style.overflow = ''
    }

    modalOpenBtns.forEach(btn => {
        btn.addEventListener ('click', openModal) 
     }),
    
     closeModalBtn.addEventListener('click', closeModal)

     modal.addEventListener('click', (event) => {
        if (event.target===modal){
            closeModal()
        } 
     })
})