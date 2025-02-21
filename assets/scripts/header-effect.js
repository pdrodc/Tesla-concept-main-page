let lastScrollTop = 0;
        const header = document.querySelector('header');
    
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
            if (scrollTop === 0) {
                
                header.classList.remove('header-white'); 
                header.style.top = "0"; 
            } else if (scrollTop > lastScrollTop) {
                
                header.style.top = "-100px"; 
            } else {
                
                header.style.top = "0";
                header.classList.add('header-white'); 
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});