const user = {
    name:"Aditya Kumar",
    age:21,
    address:{
        city:"Phagwara",
        state:"Punjab"
    }
}
const {name, age, address, address:{city,state}} = user;
console.log(name)
console.log(address.city)