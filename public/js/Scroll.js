document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Selecciona todas las secciones
    const nav = document.querySelector("nav"); // Selecciona la barra de navegación

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });


        switch (currentSection) {
            case "main":
                nav.className = "p-4 fixed w-full top-0 z-50";
                document.querySelectorAll('nav a').forEach(link => {
                    link.style.color = "#F9F5F2"; // Color blanco para los enlaces
                    link.classList.remove('active');
                    const btnmenu = document.getElementById('menu-toggle');
                    btnmenu.style.color = "#F9F5F2";
                });

                var menu = document.getElementById('menu');
                menu.style.background = "rgb(39 40 41 / 59%)";
                menu.style.backdropFilter = "blur(10px)";

                break;

            case "sobre-mi":

                nav.className = "p-4 fixed w-full top-0 z-50";
                document.querySelectorAll('nav a').forEach(link => {
                    nav.className = "backdrop-filter backdrop-blur-lg p-4 fixed w-full top-0 z-50";
                    link.style.color = "#F9F5F2"; // Color blanco para los enlaces
                    link.classList.remove('active'); 
                    const btnmenu = document.getElementById('menu-toggle');
                    btnmenu.style.color = "#F9F5F2";
                });
                var menu = document.getElementById('menu');
                menu.style.background = "rgb(9 45 63)";
                menu.style.backdropFilter = "blur(10px)";

                var active = document.querySelector('a[href="#sobre-mi"]');
                active.classList.add('active'); // Añade la clase "active" al enlace de "Sobre mí"

                var toggleActive = document.getElementById('nav-sobre-mi');
                toggleActive.classList.add('active'); // Añade la clase "active" al enlace de "Sobre mí"
                break;

            case "skills":
                nav.className = "p-4 fixed w-full top-0 z-50"; 
                document.querySelectorAll('nav a').forEach(link => {
                    nav.className = "bg-blanco-hueso  p-4 fixed w-full top-0 z-50";
                    link.style.color = "#1E1E1E"; // Color oscuro para los enlaces
                    link.classList.remove('active');
                    const btnmenu = document.getElementById('menu-toggle');
                    btnmenu.style.color = "#1E1E1E";
                });

                var activeSkills = document.querySelector('a[href="#skills"]');
                activeSkills.classList.add('active');

                var menu = document.getElementById('menu');
                menu.style.background = "#F9F5F2";

                var toggleActive = document.getElementById('nav-skills');
                toggleActive.classList.add('active');
                break;

            case "proyectos":
                nav.className = "p-4 fixed w-full top-0 z-50"; 
                document.querySelectorAll('nav a').forEach(link => {
                    link.style.color = "#F9F5F2"; // Color blanco para los enlaces
                    nav.className = "bg-verde-medio  p-4 fixed w-full top-0 z-50"
                    link.classList.remove('active');
                    const btnmenu = document.getElementById('menu-toggle');
                    btnmenu.style.color = "#F9F5F2";
                });

                var menu = document.getElementById('menu');
                menu.style.background = "#197163";

                var activeProyectos = document.querySelector('a[href="#proyectos"]');
                activeProyectos.classList.add('active'); 

                var toggleActive = document.getElementById('nav-proyectos');
                toggleActive.classList.add('active');
                break;

            case "contacto":
                nav.className = "p-4 fixed w-full top-0 z-50"; 

                document.querySelectorAll('nav a').forEach(link => {
                    link.style.color = "#1E1E1E"; // Color oscuro para los enlaces
                    nav.className = "bg-melocoton  p-4 fixed w-full top-0 z-50"
                    link.classList.remove('active');
                    const btnmenu = document.getElementById('menu-toggle');
                    btnmenu.style.color = "#1E1E1E";
                });

                var menu = document.getElementById('menu');
                menu.style.background = "#FADCAC";

                var activeContacto = document.querySelector('a[href="#contacto"]');
                activeContacto.classList.add('active');

                var toggleActive = document.getElementById('nav-contacto');
                toggleActive.classList.add('active');
                break;

            default:
                nav.className = "p-4 fixed w-full top-0 z-50";
                document.querySelectorAll('nav a').forEach(link => {
                    link.style.color = "#F9F5F2"; // Color blanco para los enlaces
                    link.classList.remove('active');
                    const btnmenu = document.getElementById('menu-toggle');
                    btnmenu.style.color = "#F9F5F2";
                });

                var menu = document.getElementById('menu');
                menu.style.background = "rgb(39 40 41 / 59%)";
                menu.style.backdropFilter = "blur(10px)";
        }
    });
});
