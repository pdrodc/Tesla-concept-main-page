const open = () => {
    const aside = document.querySelector('aside');
    aside.classList.add('active'); 
    document.getElementById('menu').style.display = 'none'; 
    document.querySelector('.logo').style.display = 'none'; 
}

const close = () => {
    const aside = document.querySelector('aside');
    aside.classList.remove('active'); 
    document.getElementById('menu').style.display = ''; 
    document.querySelector('.logo').style.display = 'block'; 
}


document.getElementById('menu').onclick = e => {
    e.preventDefault();
    open();
}


document.querySelector('aside button.close').onclick = e => {
    close();
}


document.addEventListener('click', (e) => {
    const aside = document.querySelector('aside');
    if (aside.classList.contains('active') && !aside.contains(e.target) && e.target.id !== 'menu') {
        close();
    }
});