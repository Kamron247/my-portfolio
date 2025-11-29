function addEducation({ image, header, subheading, date, link }) {
  const ul = document.getElementById("education");

  const li = document.createElement("li");
  li.className = "list-group-item rounded-start-pill w-100 px-3 border-0 d-flex row align-items-center bg-black bg-opacity-25";

  li.innerHTML = `
    <div class="col-auto px-0 py-1">
      <a href="${link}" target="_blank">
        <img 
          src="${image}" 
          alt="${subheading}" 
          class="img-fluid" 
          style="width: 5rem; height: 5rem; border-radius: 50%;">
      </a>
    </div>
    <div class="col text-start">
      <div class="row pt-2 mx-0 text-nowrap" style="display:flex; justify-content:center; align-items:center;">
        <h3 class="col px-0 mx-0 text-light">${header}</h3>
        <h6 class="col px-0 mx-0 text-end text-dark-emphasis">${date}</h6>
      </div>
      <h5 class="text-dark-emphasis">${subheading}</h5>
    </div>
  `;

  ul.appendChild(li);
}