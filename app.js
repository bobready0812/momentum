const title =document.querySelector("div.hello:first-child h1");
console.dir(title);

function handleTitleClick() {
    title.style.color = "aqua";
    
}
title.addEventListener("click", handleTitleClick)
