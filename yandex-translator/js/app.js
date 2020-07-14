"use strict";

const input = document.getElementById("input"),
  output = document.getElementById("output"),
  btn = document.getElementById("result"),
  langFrom = document.getElementById("lang-from"),
  langTo = document.getElementById("lang-to");

const getData = (link, text, lang) => {
  return fetch(link, {
    method: "POST",
    body: `key=trnsl.1.1.20190225T091515Z.06bde7bd52a8c1a7.0749f827a8a0474bf52a18b3b47f827f339c781a&lang=${lang}&text=${text}`,
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  });
};

const url = "https://translate.yandex.net/api/v1.5/tr.json/translate";

btn.addEventListener("click", () => {
  if (input) {
    btn.disabled = false;
    const lang = `${langFrom.value}-${langTo.value}`;
    getData(url, input.value, lang)
      .then((response) => {
        return response.json();
      })
      .then((responses) => {
        output.value = responses.text;
      });
  }
});
