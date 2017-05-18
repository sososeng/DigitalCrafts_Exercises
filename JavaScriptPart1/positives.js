function positiveNumber(nums){

	mynums = [];

	for(let i =0;i<nums.length;i++){
		if(nums[i] >=0){
			mynums.push(nums[i]);
		}
	}
	console.log(mynums);
}

positiveNumber([1, -3, 5, -3, 0]);