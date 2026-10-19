const cart = ["shoes","Jeans","Shirt"]
//Consumer Part
const promise = createOrder(cart);
promise
    .then(function(orderId){
        console.log(orderId)
        return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(info){
        console.log(info);
        return info;
    })
    .then(function(info){
        return showOrderSummary(info)
    })
    .then(function(summary){
        console.log(summary);
        return summary;
    })
    .then(function(summary){
        return updateWallet(summary);
    })
    .then(function(update){
        console.log(update);
    })
    .catch(function(err){
        console.log(err.message)
    });
// can attach multiple catch() functions to handle errors after each then() function 

//Producer Part
function validateCart(cart){
    return true;
}
function createOrder(cart){
    return new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("Cart not valid")
            reject(err);
        }

        const orderId = "123456";
        if(orderId){
            setTimeout(function(){
                 resolve(orderId);
            },5000)
        }
    })
    
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Success!!")
    })
}

function showOrderSummary(info){
    return new Promise(function(resolve, reject){
        resolve("Expected Delivery this week");
    })
}

function updateWallet(summary){
    return new Promise(function(resolve, reject){
        resolve("Wallet Balance updated.")
    })
}
