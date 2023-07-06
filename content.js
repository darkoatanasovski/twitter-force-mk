const changeLangAttribute = () => {
  document.querySelectorAll('div[lang="bg"]').forEach((element) => {
    element.setAttribute("lang", "mk");
  });
};

document.addEventListener("DOMNodeInserted", changeLangAttribute, false);
