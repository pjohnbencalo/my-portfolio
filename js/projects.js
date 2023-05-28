let index = document.getElementById("index");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let element = document.querySelector("section");

index.addEventListener("click", function () {
  element.classList.add("animate__animated");
  element.classList.add("animate__backOutLeft");
  // Delay the page transition for 1 seconds (1000 milliseconds)
  setTimeout(function () {
    // Replace "new-page.html" with the desired URL of the new page
    window.location.href = "index.html";
  }, 1000);
});
about.addEventListener("click", function () {
  element.classList.add("animate__animated");
  element.classList.add("animate__backOutLeft");
  // Delay the page transition for 2 seconds (1000 milliseconds)
  setTimeout(function () {
    // Replace "new-page.html" with the desired URL of the new page
    window.location.href = "about.html";
  }, 1000);
});
contact.addEventListener("click", function () {
  element.classList.add("animate__animated");
  element.classList.add("animate__backOutLeft");
  // Delay the page transition for 1 seconds (1000 milliseconds)
  setTimeout(function () {
    // Replace "new-page.html" with the desired URL of the new page
    window.location.href = "contact.html";
  }, 1000);
});
