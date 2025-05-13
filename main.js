function navigation() {
  let lists = document.querySelectorAll("li");
  lists.forEach((li) => {
    li.addEventListener("click", () => {
      lists.forEach((li) => {
        li.className = "";
      });
      li.className = "active";
    });
  });
}
navigation();

function menu() {
  let menuIcon = document.querySelector('.bx-menu');
  let menuClose = document.querySelector('.bx-x');
  let menuNav = document.querySelector('#nav-2');
  menuNav.addEventListener("click", (e) => {
    if(e.target.tagName === "A") {
    menuNav.style.transform = "translate(-50%, -100%)";
    menuNav.style.opacity = "0";
    }
  });
  menuIcon.addEventListener("click", () => {
    menuNav.style.transform = "translate(-50%, 0)";
    menuNav.style.opacity = "1";
  });
  menuClose.addEventListener('click', ()=>{
    menuNav.style.transform = "translate(-50%, -100%)";
    menuNav.style.opacity = "0";
  })
}
menu();
//
//
//
//
//
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const resultBox = document.getElementById("show-result");
const showMore = document.getElementById("show-more");

const accessKey = "4pR8U-C4Gho7fEV_qtcW_Ik6_PHn5x2Y49SQ_ApBJ5A";
let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}1&query=${keyword}&client_id=${accessKey}&per_page=12`;
  if (page === 1) {
    resultBox.innerHTML = "";
  }

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    resultBox.appendChild(imageLink);
  });

  showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", (e) => {
  page++;
  searchImages();
});
