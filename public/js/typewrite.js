function typeWriter(elementId, text, speed) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Agrega una letra a la vez
            i++;
            setTimeout(type, speed); // Llama a la función cada cierto tiempo para el próximo carácter
        }
    }

    type();
}
typeWriter("typewriter1", "Erick Oswaldo", 100); 
typeWriter("typewriter2", "Hernandez Hernandez", 100); 
