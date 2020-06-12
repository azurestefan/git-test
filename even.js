function is_even(number) {

	let calculate = parseInt(number) %2;

	if(calculate ===1){
		return "not an even number";
	}else if (calculate ===0) {
		return "it's an even nuber";
	}
}
console.log(is_even(11));
