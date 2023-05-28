let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
let element = document.querySelector("section");

about.addEventListener("click", function () {
  element.classList.add("animate__animated");
  element.classList.add("animate__backOutLeft");
  // Delay the page transition for 2 seconds (2000 milliseconds)
  setTimeout(function () {
    // Replace "new-page.html" with the desired URL of the new page
    window.location.href = "about.html";
  }, 1000);
});
projects.addEventListener("click", function () {
  element.classList.add("animate__animated");
  element.classList.add("animate__backOutLeft");
  // Delay the page transition for 2 seconds (2000 milliseconds)
  setTimeout(function () {
    // Replace "new-page.html" with the desired URL of the new page
    window.location.href = "projects.html";
  }, 1000);
});
contact.addEventListener("click", function () {
  element.classList.add("animate__animated");
  element.classList.add("animate__backOutLeft");
  // Delay the page transition for 2 seconds (2000 milliseconds)
  setTimeout(function () {
    // Replace "new-page.html" with the desired URL of the new page
    window.location.href = "contact.html";
  }, 1000);
});
