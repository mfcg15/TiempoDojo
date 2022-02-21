const divCookie = document.getElementById("cookie");
const listaGrados = document.querySelectorAll("span");

function showAlert()
{
    alert("Cargando informe meteorológico…")
}

function dimissCookie()
{
    divCookie.style.display = 'none';
}

function ElegirGrados(element)
{
    if(element.value == "°F")
    {
        listaGrados[0].innerText = "75°";
        listaGrados[1].innerText = "65°";
        listaGrados[2].innerText = "80°";
        listaGrados[3].innerText = "66°";
        listaGrados[4].innerText = "61°";
        listaGrados[5].innerText = "78°";
        listaGrados[6].innerText = "78°";
        listaGrados[7].innerText = "70°";
    }
    else
    {
        listaGrados[0].innerText = "24°";
        listaGrados[1].innerText = "18°";
        listaGrados[2].innerText = "27°";
        listaGrados[3].innerText = "19°";
        listaGrados[4].innerText = "21°";
        listaGrados[5].innerText = "16°";
        listaGrados[6].innerText = "26°";
        listaGrados[7].innerText = "21°";
    }
}