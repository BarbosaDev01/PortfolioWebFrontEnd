const nome = document.getElementById("nome");
const email = document.getElementById("email");
const buton = document.getElementById("butao");
const caixaTexto = document.querySelector("#caixaTexto input");
buton.onclick = function() {
    if (caixaTexto.value =="") {
        alert("Nenhuma mensagem foi digitada!");
    } else {
        alert("Mensagem enviada: " + caixaTexto.value);
    }
    caixaTexto.value= "";
    nome.value = "";
    email.value = "";
};

const map = L.map('map').setView([-10.9472, -37.0731], 13); // Coordenadas de Aracaju

// Stadia Maps - Light
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
}).addTo(map);


L.marker([-10.9472, -37.0731]).addTo(map)
    .bindPopup('Aracaju, SE')
    .openPopup();