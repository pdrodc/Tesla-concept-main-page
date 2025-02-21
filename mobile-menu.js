const open = () => {
    document.querySelector('aside').className = 'active';
}

const close = () => {
    document.querySelector('aside').className = '';
}

document.getElementById('menu').onclick = e => {
    e.preventDefault();
    open();
}