const p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("P1 success")
    },3000)
})
const p2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("P2 success")
    },1000)
})
const p3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("P3 success")
    },2000)
})
//promise.all() => Waits for all promises to resolve; rejects immediately if any one fails.
Promise.all([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})
//promise.allSettled() => Waits for all promises to finish, whether they resolve or reject.
Promise.allSettled([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})
//promise.race() => Returns the result of the first promise to settle (resolve or reject).
Promise.race([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})
//promise.any() => Returns the result of the first promise to resolve; rejects only if all promises
Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})
