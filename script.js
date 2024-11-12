const wrapper = document.querySelector('.wrapper');
const logLink = document.querySelector('.loglink');
const regLink = document.querySelector('.reglink');
const logpop = document.querySelector('.Login-popup');
const closeic = document.querySelector('.icon-close');
let icon1= document.getElementById('eyeclose');
let password= document.getElementById('password');
let icon11= document.getElementById('eyeclose1');
let password1= document.getElementById('password1');

logpop.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

closeic.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})

regLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

logLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

icon1.onclick = function(){
    if(password.type=='password'){
        password.type='text';
        icon1.name='eye-outline';
        icon1.id='active';

    } 
    else{
        password.type='password';
        icon1.name ='eye-off-outline';
        icon1.id='is-active';
    }
}

icon11.onclick = function(){
    if(password1.type=='password'){
        password1.type='text';
        icon11.name='eye-outline';
        icon11.id='active-now';

    } 
    else{
        password1.type='password';
        icon11.name ='eye-off-outline';
        icon11.id='is-active-now';
    }
}

function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}