// //your JS code here. If required.

let output = document.getElementById('output');  // Get the output div element

// Start with an initial promise that resolves after 3 seconds with the array [1, 2, 3, 4]
new Promise((resolve, reject) => {
    let arr = [1, 2, 3, 4];
    setTimeout(() => resolve(arr), 3000);  // Resolving the array after 3 seconds
})
.then((arr) => {
    // First transformation: Filter out the odd numbers (leaving only the even ones)
    let evenNumbers = arr.filter((val) => val % 2 === 0);
    
    // After a 1-second delay, display the even numbers in the output div
    setTimeout(() => {
        output.innerText = evenNumbers.join(', ');  // Join the array elements into a string for display
        return evenNumbers;  // Pass the even numbers to the next promise
    }, 1000);  // 1-second delay
})
.then((evenNumbers) => {
    // Second transformation: Multiply each even number by 2
    let multipliedNumbers = evenNumbers.map((val) => val * 2);
    
    // After an additional 2-second delay, display the multiplied numbers in the output div
    setTimeout(() => {
        output.innerText = multipliedNumbers.join(', ');  // Display the final array as a string
    }, 2000);  // 2-second delay after the first transformation
})
.catch((err) => console.log('Error:', err));  // Catch any errors in the promise chain



// let output = document.querySelector('#output') // 
// let arr = [1, 2, 3, 4];
// // Start with an initial promise that resolves with the array [1, 2, 3, 4]
// new Promise((resolve, reject) => {
    
// 	output.innerText = ``;
//     resolve(arr);  
// })
// .then((arr) => {
//     //Filter out the odd numbers to get the even number
//     let evenNumbers = arr.filter((val) => val % 2 === 0);
    
//     // After 1 second, display the even numbers
//     setTimeout(() => {
//         output.innerText = `${evenNumbers}`;  // Convert array to a comma-separated string
//         return evenNumbers; // Pass even numbers to the next promise
//     }, 1000);  // 1-second delay
// })
// .then((evenNumbers) => {
 
//     let multipliedNumbers = evenNumbers.map((val) => val * 2);
    

//     setTimeout(() => {
//         output.innerText = `${multipliedNumbers}`; 
//     }, 2000);  
// })
// .catch((err) => console.log('Error:', err));  // Catch any errors in the chain




// let ouput = document.getElementById('output');

// new Promise((resolve , reject) => {
// 	let arr = [1,2,3,4];
// 	ouput.innerText = ``;
// 	resolve(arr);
// })
// .then((arr) =>{
// 	let even = arr.filter((val) => val % 2 == 0);
// 	setTimeout(()=>{
// 		ouput.innerText = even.join(', ');
// 		return even;
// 	},1000)
// })
// .then((even)=>{
// 	let afterMulti = data.map((val)=> val*2);
// 	setTimeout(()=> {
		
// 		ouput.innerText = afterMulti.join(', ')
// 	},2000)
// })
// .catch(err => console.log(err));






