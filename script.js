//navbar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//cart
const cart1 = document.getElementById("cart1");
if(cart1){
    cart1.addEventListener('click',() => {
        cart1.classList.remove('hide');
    // cart1.classList.remove();
     })
}

