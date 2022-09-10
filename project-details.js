document.addEventListener("DOMContentLoaded", function (event) {
  const url_string = window.location.href.toLowerCase();
  const url = new URL(url_string);
  const project = url.searchParams.get("project");

  fetch("../assets/projects.json")
    .then((response) => response.json())
    .then((data) => createProject(data, project))
    .catch((error) => console.log(error));
});

function createProject(data, project) {
  let wrapper = document.querySelector(".project_details_section");

  let element = document.createElement("div");

  element.innerHTML =
    `<h1 class="main_title">${data[project].title}</h1>` +
    '<div class="project_key_info">' +
    `<div class="subtitle">${data[project].subtitle}</div>` +
    '<div class="completion_date">' + '<div>Completed on</div>' +
    `<div>${data[project].completion_date}</div>` +
    "</div>" +
    "</div>" +
    `<img class="background_image" src="${data[project].image}">` +
    `<img class="foreground_image" src="${data[project].image}">` +
    "<p>" +
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt quix duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi." +
    "</p>" +
    "<p>" +
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nis cillum minim tempor enim." +
    "</p>";

  wrapper.appendChild(element);
}
