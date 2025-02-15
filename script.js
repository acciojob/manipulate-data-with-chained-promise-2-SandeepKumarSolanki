//your JS code here. If required.


let ouput = document.getElementById('output');

new Promise((resolve , reject) => {
	let arr = [1,2,3,4];
	ouput.innerText = ``;
	resolve(arr);
})
.then((arr) =>{
	let even = arr.filter((val) => val % 2 == 0);
	setTimeout(()=>{
		ouput.innerText = even.join(', ');
		return even;
	},1000)
})
.then((even)=>{
	let afterMulti = data.map((val)=> val*2);
	setTimeout(()=> {
		
		ouput.innerText = afterMulti.join(', ')
	},2000)
})
.catch(err => console.log(err));






