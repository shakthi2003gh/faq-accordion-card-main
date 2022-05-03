const listHeading = document.querySelectorAll(".list__heading");

listHeading.forEach((element) => {
  element.addEventListener("click", (e) => {
    const contentList = e.target.closest(".content__list");
    const tragetedlistHeading = contentList.querySelector(".list__heading");
    const listContent = contentList.querySelector(".list__content");

    tragetedlistHeading.classList.toggle("heading--hover");
    tragetedlistHeading.children[1].classList.toggle("expanded-button");
    listContent.classList.toggle("list__content-expand");

    listHeading.forEach((element) => {
      if (element.innerHTML != tragetedlistHeading.innerHTML) {
        element.children[1].classList.remove("expanded-button");
        element.nextElementSibling.classList.remove("list__content-expand");
      }

      If (!element.children[1].classList.contains("expanded-button")) {
        element.classList.remove("heading--hover");
      }
    });
  });
});
