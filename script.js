const view_more = document.querySelector('.view_more');
const card_d_n_b = document.querySelectorAll('.card_d_n_b');

let asd = true
view_more.addEventListener('click', function () {
    card_d_n_b.forEach((item) => {
        if (asd) {
            item.style.display = 'block';
            view_more.innerHTML = 'Свернуть <img style="transform: rotate(180deg);" src="./img/Arrow 2.png" alt="png">'  
        }else{            
            item.style.display = 'none';
            view_more.innerHTML = 'Дополнительные услуги <img src="./img/Arrow 2.png" alt="png">'  
        }  
    })
    asd = !asd
})
const r_card_d_nb = document.querySelectorAll('.r_card_d_nb');
const view_more2 = document.querySelector('.view_more2');


let asd2 = true
view_more2.addEventListener('click', function () {
    r_card_d_nb.forEach((item) => {
        if (asd2) {
            item.style.display = 'block';
            view_more2.innerHTML = 'Свернуть <img style="transform: rotate(180deg);" src="./img/Arrow 2.png" alt="png">'  
        }else{            
            item.style.display = 'none';
            view_more2.innerHTML = 'Следующие этапы <img src="./img/Arrow 2.png" alt="png">'  
        }  
    })
    asd2 = !asd2
})

const bars = document.querySelector('.bars');
const navbar_bars = document.querySelector('.navbar_bars');
const closee = document.querySelector('.navbar_bars span');

bars.addEventListener('click', function () {  
    navbar_bars.style.position = 'fixed';
    navbar_bars.style.top = 0
    body.style.overflow = 'hidden';
})
closee.addEventListener('click', function () {   
    navbar_bars.style.top = '-100%'
    body.style.overflow = 'unset';
})


