const title =document.querySelector("div.hello:first-child h1");
console.dir(title);


function handleTitleClick() {
    title.style.color = "aqua";
}

function handleMouseEnter() {
    title.innerText ="Mouse is here!!";
}

function handleMouseLeave() {
    title.innerText ="Mouse is Gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("sos! no WIFI");
}
function handleWindowOnline(){
    alert("all good!");
}
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);