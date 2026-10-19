// function attachEventListener(){
//     document.getElementById("clickMe").addEventListener("click",function(){
//         console.log("BUtton clicked")
//     })
// }
// attachEventListener()

const doWork = (onFinished) => {
    console.log("Step 1: Doing some work...");
    console.log("Step 2: Work is done!");
    onFinished(); // call the function that was passed in
    };
    // Now call doWork and give it a function to run when done
    doWork(() => {
    console.log("Step 3: I was called after work finished!");
});