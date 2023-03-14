const preOrderBtn = document.querySelector('.pre-order');
const preOrderPopUp = document.querySelector('.pre-order_popup');
const preOrderClose = document.querySelector('.modal-btn');

preOrderBtn.addEventListener('click', function(){
    preOrderPopUp.classList.add('show');

});


preOrderClose.addEventListener('click', function(){
    preOrderPopUp.classList.remove('show');
    
});
console.log("20");