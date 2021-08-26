// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const title = document.querySelector("h2");
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handleEnter: function () {
    title.innerText = "Entered!";
    title.style.color = colors[0];
  },
  handleClicked: function () {
    title.innerText = "clicked!";
    title.style.color = colors[1];
  },
  handleLeave: function () {
    title.innerText = "Leaved!";
    title.style.color = colors[2];
  },
  handleResize: function () {
    title.innerText = "Resized!";
    title.style.color = colors[3];
  }
};

title.addEventListener("contextmenu", superEventHandler.handleClicked);
title.addEventListener("mouseleave", superEventHandler.handleLeave);
title.addEventListener("mouseenter", superEventHandler.handleEnter);
window.addEventListener("resize", superEventHandler.handleResize);
