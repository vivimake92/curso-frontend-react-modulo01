const names = [
    "Henrique", 
    "Loris", 
    "Haroldo", 
    "Priscila", 
    "Lucas"
]

console.log(names)

for (let i = 0; i < names.length; i ++) {
    console.log(names[i])
    if (names[i] == "Haroldo") {
        console.log("Meio do array")
    }
}