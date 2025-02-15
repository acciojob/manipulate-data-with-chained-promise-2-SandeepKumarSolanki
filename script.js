// //your JS code here. If required.


let output = document.querySelector('#output') // 
let arr = [1, 2, 3, 4];
// Start with an initial promise that resolves with the array [1, 2, 3, 4]
new Promise((resolve, reject) => {
    
	output.innerText = ``;
    resolve(arr);  
})
.then((arr) => {
    //Filter out the odd numbers to get the even number
    let evenNumbers = arr.filter((val) => val % 2 === 0);
    
    // After 1 second, display the even numbers
    setTimeout(() => {
        output.innerText = `${evenNumbers}`;  // Convert array to a comma-separated string
        return evenNumbers; // Pass even numbers to the next promise
    }, 1000);  // 1-second delay
})
.then((evenNumbers) => {
 
    let multipliedNumbers = evenNumbers.map((val) => val * 2);
    

    setTimeout(() => {
        output.innerText = `${multipliedNumbers}`; 
    }, 2000);  
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






