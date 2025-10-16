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

const map = L.map('map').setView([-10.9472, -37.0731], 13); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([-10.9472, -37.0731]).addTo(map)
    .bindPopup('Aracaju, SE')
    .openPopup();