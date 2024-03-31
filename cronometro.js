document.addEventListener("DOMContentLoaded", function() {
    // Variables globales
    let cronometro;
    let tiempoInicio;
    let corriendo = false;

    // Función para iniciar el cronómetro
    function iniciarCronometro() {
        if (!corriendo) {
            tiempoInicio = Date.now();
            cronometro = setInterval(actualizarTiempo, 100);
            corriendo = true;
            document.getElementById("iniciar").style.backgroundColor = "red";
            document.getElementById("detener").style.backgroundColor = "";
            document.getElementById("resetear").style.backgroundColor = "";
        }
    }

    // Función para detener el cronómetro
    function detenerCronometro() {
        clearInterval(cronometro);
        corriendo = false;
        document.getElementById("detener").style.backgroundColor = "blue";
        document.getElementById("iniciar").style.backgroundColor = "";
        document.getElementById("resetear").style.backgroundColor = "";
    }

    // Función para reiniciar el cronómetro
    function reiniciarCronometro() {
        clearInterval(cronometro);
        corriendo = false;
        document.getElementById("resetear").style.backgroundColor = "yellow";
        document.getElementById("tiempo").textContent = "00:00:00.0";
        document.getElementById("detener").style.backgroundColor = "";
        document.getElementById("iniciar").style.backgroundColor = "";
    }

    // Función para actualizar el tiempo mostrado en el cronómetro
    function actualizarTiempo() {
        const tiempoActual = Date.now();
        const tiempoTranscurrido = tiempoActual - tiempoInicio;
        const tiempoFormateado = convertirTiempo(tiempoTranscurrido);
        document.getElementById("tiempo").textContent = tiempoFormateado;
    }

    // Función para convertir el tiempo a un formato HH:MM:SS.S
    function convertirTiempo(tiempo) {
        const segundos = Math.floor(tiempo / 1000) % 60;
        const minutos = Math.floor(tiempo / 1000 / 60) % 60;
        const horas = Math.floor(tiempo / 1000 / 60 / 60);
        const decimas = Math.floor((tiempo % 1000) / 100);
        return (
            pad(horas) + ":" +
            pad(minutos) + ":" +
            pad(segundos) + "." +
            decimas
        );
    }

    // Función para agregar ceros a la izquierda si es necesario
    function pad(valor) {
        return valor < 10 ? '0' + valor : valor;
    }

    // Event Listeners para los botones de control
    document.getElementById("iniciar").addEventListener("click", function() {
        if (!corriendo) {
            iniciarCronometro();
        } else {
            detenerCronometro();
        }
    });
    document.getElementById("detener").addEventListener("click", function() {
        detenerCronometro();
    });
    document.getElementById("resetear").addEventListener("click", function() {
        reiniciarCronometro();
    });
});
