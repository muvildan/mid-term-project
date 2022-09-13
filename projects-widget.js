document.addEventListener("DOMContentLoaded", function (event) {
  const url_string = window.location.href.toLowerCase();
  const url = new URL(url_string);
  const project = url.searchParams.get("project");

  fetch("/public/assets/projects.json")
    .then((response) => response.json())
    .then((data) => createElements(data, project))
    .catch((error) => console.log(error));
});

function createElements(data, project) {
  const wrapper = document.querySelector(".cards_wrapper");

  let arr = [];
  while (arr.length < 3) {
    var r = Math.floor(Math.random() * data.length - 1) + 1;
    if (arr.indexOf(r) === -1 && project != r) arr.push(r);
  }

  for (option of arr) {
    let element = document.createElement("div");
    element.classList.add("card");
    element.innerHTML =
      `<img class="banner" src=${data[option].image} alt="Project banner"/>` +
      '<div class="card_details">' +
      `<div class="card_title">${data[option].title}</div>` +
      `<p class="card_description">${data[option].subtitle}</p>` +
      `<a href="./projects.html?project=${option}" class="seconday_button">Learn more</a>` +
      "</div>";

    wrapper.appendChild(element);
  }
}
