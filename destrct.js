console.log("Destructuring")
const users = {name:"Rahul",age:21,city:"Delhi"}
const {name,age,city} = users
console.log(name);
const {name:userName, age:userAge, phone = 'N/A'} = users
console.log(`${userName} is ${userAge}`)
const [head, ...tail] = [1,2,3,4]
console.log(head);
console.log(tail);
const [first, , third] = [10,20,30]
console.log(first);
console.log(third);


