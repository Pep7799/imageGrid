// Get the elements with class="column"
let elements = document.querySelectorAll(".column");


// Full-width images
function first() {
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function second() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function forth() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

let  header = document.querySelector("#headerEl");
let btns = header.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}