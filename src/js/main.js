const horaContainer = document.querySelectorAll(".time");
const body = document.querySelector("body")
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    if(hora < 10) hora = "0" + hora;
    if(minuto < 10) minuto = "0" + minuto;
    if(segundo < 10) segundo = "0" + segundo;

    if(dateToday.getDay() === 3)
    {
        for (let i = 0; i < horaContainer.length; i++) 
        {
            horaContainer[i].style.background = "#d93098";
        }

        body.style.background = "linear-gradient(120deg,#eb37c4,#f6a3e4, #eb37c4)";
    }

    if(dateToday.getDay() === 0)
    {
        for (let i = 0; i < horaContainer.length; i++) 
        {
            horaContainer[i].style.background = "#e5a03f";
        }

        body.style.background = "linear-gradient(120deg,#eb37c4,#f6a3e4, #bd802b)";
    }

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo
})