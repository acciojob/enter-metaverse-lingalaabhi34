//your JS code here. If required.
const p = document.getElementById("status");
const button = document.getElementById("enterBtn");
button.addEventListener("click",onclick);
function onclick(){
    const h = document.createElement("h1");
    p.innerText="";
    h.innerText="Entered Metaverse";
    p.appendChild(h);
}