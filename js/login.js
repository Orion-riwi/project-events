const contenedor = document.querySelector(".contenedor")
const btnSingIn = document.getElementById("btn-sing-in")
const btnSingUp = document.getElementById("btn-sing-up")

btnSingIn.addEventListener("click", ()=>{
    contenedor.classList.remove("toggle");
});
btnSingUp.addEventListener("click", ()=>{
    contenedor.classList.add("toggle");
});
