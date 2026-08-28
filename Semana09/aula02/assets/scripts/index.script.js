console.log("Formulários - Javascript");

const userData = document.getElementById("userData");

class User {
  constructor(name, age, studentLevel) {
    this.name = name;
    this.age = age;
    this.studentLevel = studentLevel;
  }

  ageVerify() {
    /*if (this.age >= 18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de idade");
    }
    */

    this.age >= 18
      ? console.log("Maior de idade")
      : console.log("Menor de idade");
  }
}

const form = document.getElementsByTagName("form");
document.getElementById("name").focus();

form[0].addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const studentLevel = document.getElementById("studentLevel").value;
  const terms = document.getElementById("terms").checked;
  const politics = document.getElementById("politics").checked;
  const gender = document.querySelector("input[name='gender']:checked");
  const userData = document.getElementById("userData");
  const success = document.getElementById("success");

  console.log(gender.value);
  console.log("formulário submetido");

  const user = new User(name, age, studentLevel);

  console.log("Nome digitado: ", user.name);
  console.log("Idade digitada: ", user.age);
  console.log("Nível de graduação: ", user.studentLevel);

  success.textContent = "Usuário cadastrado com sucesso!";

  setTimeout(() => {
    success.textContent = "";
  }, 4000);

  render(user.name, user.age);
  //clean();
  form[0].reset();

  userData.innerHTML = `
  <hr />
  <p><strong>Nome do usuário</strong>: ${user.name}</p>
  <p><strong>Idade do usuário</strong>: ${user.age}</p>
  `;

  user.ageVerify();
});

function render(name, age) {
  userData.innerHTML = `
  <hr />
  <p><strong>Nome do usuário</strong>: ${name}</p>
  <p><strong>Idade do usuário</strong>: ${age}</p>
  `;
}

function clean() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("studentLevel").value = "";
  document.getElementById("terms").checked = "";
  document.getElementById("politics").checked = "";
  document.querySelector("input[name='gender']").checked = false;
}
