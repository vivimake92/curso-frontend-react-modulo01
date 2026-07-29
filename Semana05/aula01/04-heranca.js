// Herança (extends) é um conceito de POO (Programação Orientada a Objetos) que permite que uma classe (chamada de subclasse ou classe derivada) herde propriedades e métodos de outra classe (chamada de superclasse ou classe base). Isso promove a reutilização de código e a criação de hierarquias de classes.

class User {
    constructor(name) {
        this.name = name
    }

    login() {
        console.log(`${this.name} entrou no sistema!`)
    }
}

class Student extends User {
    constructor(name, course) {
        super(name) // super() chama o construtor da classe pai (User) para inicializar a propriedade name
        this.course = course
    }

    showCourse() {
        console.log(`${this.name} está matriculado no curso ${this.course}`)
    }
}

const student1 = new Student("Gabriel", "Eng. Software");

student1.login();
student1.showCourse();