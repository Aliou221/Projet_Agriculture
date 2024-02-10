document.addEventListener("DOMContentLoaded", function() {
   
    var menuBurger = document.getElementById('menu-burger');
    var navbarList = document.querySelector('.navbar ul');
    
    menuBurger.addEventListener('click', function() {
       
        if (window.innerWidth <= 680) {
           
            if (navbarList.style.display === 'flex') {
                navbarList.style.display = 'none';
                document.getElementById('menu-burger').innerHTML="&#9776;";
                
            } else {
                navbarList.style.display = 'flex';
                document.getElementById('menu-burger').innerHTML="&#10005";
                
            }
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 680) {
            navbarList.style.display = 'flex';
        }
    });
});
