const btn = document.querySelector('.translate');
const text = document.querySelector('.text');

const langObj = {
    ar : {
        btn : 'English',
        txt: 'اهلا بكم في اللغة العربية'
    },
    en : {
        btn : 'العربية',
        txt: 'Welcome in English'
    },
}

let lang = localStorage.getItem('lang');
if(!lang)
{
    localStorage.setItem('lang', 'en');
}

btn.textContent = lang === 'en' ? langObj.en.btn : langObj.ar.btn;
text.textContent = lang === 'en' ? langObj.en.txt : langObj.ar.txt;

btn.addEventListener('click', ()=>{
    let lang = localStorage.getItem('lang');
    localStorage.setItem('lang', lang == 'en' ? 'ar' : 'en');
    lang = localStorage.getItem('lang');
    btn.textContent = lang === 'en' ? langObj.en.btn : langObj.ar.btn;
    text.textContent = lang === 'en' ? langObj.en.txt : langObj.ar.txt;    

})