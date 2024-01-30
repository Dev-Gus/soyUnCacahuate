document.addEventListener('DOMContentLoaded', ()=> {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const menu = document.querySelector('.menu__modal');
    const navItems = document.querySelectorAll('.nav-item')

    menuBtn.addEventListener('click', ()=> {
        menu.style.transform = 'translateX(0)';
        menuBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', ()=> {
        menu.style.transform = 'translateX(-100%)';
        menuBtn.style.display = 'block';
    });

    navItems.forEach((navItem)=> {
        navItem.addEventListener('click', () => {
            menu.style.transform = 'translateX(-100%)';
            menuBtn.style.display = 'block';
        });
    })
});