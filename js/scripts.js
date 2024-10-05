// script.js

// El texto que queremos escribir dinámicamente
const text = "Estoy muy contento de que estén aquí";  
const targetElement = document.querySelector('[data-target="typing-effect.content"]');
let index = 0;

// Función que simula el efecto de máquina de escribir
function typeText() {
    // Reiniciar el índice al comienzo
    index = 0; // Reinicia el índice para volver a escribir el texto
    targetElement.innerHTML = ''; // Limpiar el contenido anterior
    
    function type() {
        if (index < text.length) {
            // Añadimos un carácter o salto de línea
            if (text[index] === '<') {
                // Detectamos si es una etiqueta HTML
                const tag = text.slice(index, text.indexOf('>', index) + 1);
                targetElement.innerHTML += tag;
                index += tag.length;
            } else {
                targetElement.innerHTML += text[index];
                index++;
            }
            setTimeout(type, 110);  // Controla la velocidad de escritura
        }
    }
    type(); // Inicia el efecto de escritura
}

// Inicia el efecto al cargar la página y cada 7 segundos
window.onload = function() {
    typeText(); // Ejecutar la función al cargar
    setInterval(typeText, 7000); // Reiniciar el efecto cada 7 segundos
};



// script.js

// Selecciona el cursor personalizado
const customCursor = document.querySelector('.custom-cursor');

// Escucha el evento de movimiento del mouse
document.addEventListener('mousemove', (e) => {
    // Actualiza la posición del cursor personalizado, incluyendo el desplazamiento de la página
    customCursor.style.left = `${e.clientX + window.scrollX}px`;
    customCursor.style.top = `${e.clientY + window.scrollY}px`;
});

// Escucha el evento de desplazamiento (scroll)
window.addEventListener('scroll', () => {    
    customCursor.style.left = `${mouseX}px`;
    customCursor.style.top = `${mouseY}px`;
});


// Función para alternar la visibilidad de la imagen
function toggleImage() {
    const imagen = document.getElementById('imagenODS');

    // Aplicar la transición de opacidad
    imagen.style.transition = 'opacity 1s ease-in-out';

    if (imagen.style.opacity === '0') {
        imagen.style.opacity = '1'; // Muestra la imagen
        imagen.style.visibility = 'visible'; // Asegúrate de que la imagen sea visible
    } else {
        imagen.style.opacity = '0'; // Oculta la imagen
        imagen.style.visibility = 'hidden'; // La imagen sigue ocupando espacio
    }
}

// Cambiar la visibilidad cada 5 segundos
setInterval(toggleImage, 3000);
