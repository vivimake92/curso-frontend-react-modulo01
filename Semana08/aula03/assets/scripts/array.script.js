console.log("Array na Tela");

const animes = [
  {
    nome: "Naruto",
    ano: 2002,
  },
  {
    nome: "Dragon Ball",
    ano: 1986,
  },
  {
    nome: "One Piece",
    ano: 1999,
  },
  {
    nome: "Attack on Titan",
    ano: 2013,
  },
];

const list = document.getElementById("animes-list");

/*setTimeout(() => {
  list.innerHTML = "<p>Lista carregando...</p>";
}, 3000);*/

/*animes.forEach((anime) => {
  list.innerHTML =
    list.innerHTML +
    `
    <ul>
        <li>${anime.nome}</li>
    </ul>
    `;
});
*/

list.innerHTML = `
    <ul>
        ${animes.map((anime) => {}).join("")}
    </ul>
`;

const listHTML = animes.map((anime) => {
  return `<li>${anime.nome}</li>`;
});

console.log(listHTML);

list.innerHTML = `
    <ul>
        ${listHTML.join("")}
    </ul>
`;
