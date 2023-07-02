

let msg = document.querySelector('.message')
let bd = document.querySelector('body')


let tamanho_tela = window.innerWidth;

window.addEventListener('load', ()=>{
    if(tamanho_tela <= 495) {
      setTimeout(() => {
            msg.style.opacity = 1;
            msg.style.display = 'block'
              
            setTimeout(()=>{
              msg.style.opacity = 0;
              setTimeout(()=>{
                msg.style.display = 'none';
              },500)
        }, 15000)
       }, 1000);
    }else {
      msg.style.display = 'nonne'
    }
}) 

let btnclosed = document.querySelector('.btn-message-close')

btnclosed.addEventListener('click', ()=>{
   msg.style.display = 'none';
})