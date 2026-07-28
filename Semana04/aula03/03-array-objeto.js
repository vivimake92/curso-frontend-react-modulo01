// Junção de arrays(listas) e objetos

const students = [
    {"name": "Ana", "grade": 8},
    {"name": "Bruno", "grade": 5},
    {"name": "Carla", "grade": 7}
]

console.log(students);


console.log(students[0].name); // Acessando a propriedade name do primeiro objeto do array students

console.log(students[2].grade); // Acessando a propriedade grade do terceiro objeto do array students

// Podemos percorrer o array de objetos usando o método forEach() do array, que executa uma função para cada elemento do array.

students.forEach((student) => {
    return console.log(student.name);
})

// JSON (JavaScript Object Notation) é um formato de dados leve, baseado em texto, que é fácil de ler e escrever para humanos e fácil de analisar e gerar para máquinas. Ele é amplamente utilizado para transmitir dados entre um servidor e um cliente em aplicações web.