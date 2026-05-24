const filmy = [
  {
    tytul: "Incepcja",
    opis: "Czasy, gdy technologia pozwala na wchodzenie w świat snów. Złodziej Cobb ma za zadanie wszczepić myśl do śpiącego umysłu.",
    plakat: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
  },
  {
    tytul: "Lot nad kukułczym gniazdem",
    opis: "Historia złodzieja, szulera i chuligana, który, by uniknąć więzienia, udaje niepoczytalność. Trafia do szpitala dla umysłowo chorych, gdzie twardą ręką rządzi siostra Ratched..",
    plakat: "https://image.tmdb.org/t/p/w600_and_h900_face/3ICRZ5DOBwapO25lphA8yiCWi4v.jpg"
  },
  {
    tytul: "12 gniewnych ludzi",
    opis: "Nastoletni chłopiec zostaje oskarżony o morderstwo. Dwunastu przysięgłych debatuje nad wyrokiem skazującym na śmierć.",
    plakat: "https://a.ltrbxd.com/resized/film-poster/5/1/7/0/0/51700-12-angry-men-0-1000-0-1500-crop.jpg?v=b8aaf291a9"
  },
  {
    tytul: "Znaki",
    opis: "Po śmierci żony pastor Graham Hess zrywa z Kościołem. Pewnego dnia na polu kukurydzy tuż obok rodzinnej farmy znajduje tajemniczy symbol.",
    plakat: "https://fwcdn.pl/fpo/22/26/32226/7535945_1.10.webp"
  }
];

function losujFilm() {
  const film = filmy[Math.floor(Math.random() * filmy.length)];

  document.getElementById("tytul").innerText = film.tytul;
  document.getElementById("opis").innerText = film.opis;
  document.getElementById("plakat").src = film.plakat;
}
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("trybciemny");
});