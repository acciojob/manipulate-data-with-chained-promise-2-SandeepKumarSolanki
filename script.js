//your JS code here. If required.

let arr = [1,2,3,4];
let ouput = document.getElementById('ouput');

new Promise((resolve , reject) => {
	ouput.innerText = ``;
	return resolve(arr);
})
.then((arr) =>{
	let even = arr.filter((val) => val % 2 == 0);
	setTimeout(()=>{
		ouput.innerText = `${even}`;
		return resolve(even);
	},1000)
})
.then((data)=>{
	setTimeout(()=> {
		let afterMulti = data.map((val)=> val*2);
		ouput.innerText = `${afterMulti}`
	},2000)
})
.catch(err => console.log(err));






