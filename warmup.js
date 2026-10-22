const student = {
    name: "maria",
    age: 20,
    marks: [8,9,7,8],
    active: true

}

console.log(student.name)
console.log(student.marks[0])

student.marks.push(10)

student.active = false


console.log(student)


// Ejercicio 2

const fruit = ["orange","banana","pear","cherry","lemon"];

fruit.push("watermelon")
fruit.pop()
fruit.shift()

console.log(fruit)
