//  ------------------------------------setTimeout()----------------------------


// EXAMPLE # 1


// const sayMoosa = () => {
//  console.log("Way 1:" + " " + "Hey,Moosa");
// }
// setTimeout(sayMoosa, 1500);


// EXAMPLE # 2


// setTimeout(function () {
//     console.log("Way 2:" + " " + "Hey, Moosa");
// }, 1500)



// EXAMPLE # 3


// let head = document.querySelectorAll("h1")[0];

// let changeText = () => {
//     head.innerHTML = "Hello Moosa!"
// }
// const clearTimeId = setInterval(changeText, 1000);






//  ------------------------------------clearTimeout()----------------------------

// EXAMPLE # 4
// let isHelloJS = true; // A flag to toggle the text

// const changeText = () => {
//     if (isHelloJS) {
//         head.innerHTML = "Hello Java-script";
//     } else {
//         head.innerHTML = "Hello Moosa";
//     }
//     isHelloJS = !isHelloJS; // Toggle the flag
// };

// const clearTimeId = setInterval(changeText, 1000);


// let btn = document.getElementById("stop-btn");

// btn.addEventListener('click', function () {
//     clearInterval(clearTimeId);
//     console.log("Done");
// })

// let btn2 = document.getElementById("start-btn");

// btn2.addEventListener('click', function () {
//     const changeText = () => {
//         if (isHelloJS) {
//             head.innerHTML = "Hello Java-script";
//         } else {
//             head.innerHTML = "Hello Moosa";
//         }
//         isHelloJS = !isHelloJS;
//     };
//     setInterval(changeText, 1000);
// })


let head = document.querySelectorAll("h1")[0];
let isHelloJS = true; // A flag to toggle the text
let intervalId = null; // Variable to store interval ID

const changeText = () => {
    if (isHelloJS) {
        head.innerHTML = "Hello Java-script";
    } else {
        head.innerHTML = "Hello Moosa";
    }
    isHelloJS = !isHelloJS; // Toggle the flag
};

// Start the interval when the page loads
intervalId = setInterval(changeText, 1000);

let btn = document.getElementById("stop-btn");

btn.addEventListener('click', function () {
    clearInterval(intervalId);
    console.log("Interval stopped");
});

let btn2 = document.getElementById("start-btn");

btn2.addEventListener('click', function () {
    // Clear any existing interval before starting a new one
    clearInterval(intervalId);
    intervalId = setInterval(changeText, 1000);
    console.log("Interval started");
});
