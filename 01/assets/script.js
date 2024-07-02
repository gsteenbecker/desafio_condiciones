const imagen = document.getElementById('imagen')
        imagen.addEventListener('click', () => {
            if (imagen.classList.contains('borde-rojo')) {
                imagen.classList.remove('borde-rojo')
            } else {
                imagen.classList.add('borde-rojo')
            }
        })