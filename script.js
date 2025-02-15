// //your JS code here. If required.


let output = document.getElementById('output'); // Corrected the typo in output ID

// Start with an initial promise that resolves with the array [1, 2, 3, 4]
new Promise((resolve, reject) => {
    let arr = [1, 2, 3, 4];
    resolve(arr);  // Resolve the array after 3 seconds to simulate async behavior
})
.then((arr) => {
    // First transformation: Filter out the odd numbers to get the even ones
    let evenNumbers = arr.filter((val) => val % 2 === 0);
    
    // After 1 second, display the even numbers
    setTimeout(() => {
        output.innerText = evenNumbers.join(', ');  // Convert array to a comma-separated string
        return evenNumbers; // Pass even numbers to the next promise
    }, 1000);  // 1-second delay
})
.then((evenNumbers) => {
    // Second transformation: Multiply each even number by 2
    let multipliedNumbers = evenNumbers.map((val) => val * 2);
    
    // After an additional 2 seconds, display the multiplied numbers
    setTimeout(() => {
        output.innerText = multipliedNumbers.join(', '); // Display the new transformed array
    }, 2000);  // 2-second delay after the first transformation
})
.catch((err) => console.log('Error:', err));  // Catch any errors in the chain




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






