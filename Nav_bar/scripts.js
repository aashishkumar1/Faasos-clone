
// ---- Hamburger Scripts  start---

let hmb_trigger = document.querySelector('#hmb-btn')
let hmb_modelWrap = document.querySelector('.hmb_model_wrapper');
let hmb_closeButton = document.querySelector('.hmb_close')

hmb_trigger.addEventListener('click', function(){
    open_hmb()
})

hmb_closeButton.addEventListener('click', function(){
    close_hmb()
})
document.addEventListener('keydown',(e)=>{

    if(e.key === 'Escape'){

        close_hmb()
    }
})

hmb_modelWrap.addEventListener('click',function(e){
    if(e.target !== this) return 

    close_hmb()
})




function open_hmb(){
    hmb_modelWrap.classList.add('active')
}
function  close_hmb(){
    hmb_modelWrap.classList.remove('active')
}

// ---- Hamburger scripts end----