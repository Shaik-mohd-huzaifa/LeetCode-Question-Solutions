var findMatrix = function(nums) {
    nums = nums.sort((a,b) => a - b);
    const twoD = []
    let count = 0
    if(nums != 0){
        twoD.push([nums[0]])
    }
    for(let i = 0;i< nums.length;i++){
        if(nums[i - 1] == nums[i]){
            count++;
        twoD[count] ? twoD[count].push(nums[i]) : twoD.push([nums[i]])        
       }else if(twoD[twoD[count].length - 1] != nums[i]){
         count = 0
         twoD[count].push(nums[i])
       }
    }
    return twoD
}
console.log(findMatrix([1,2,3,1,2,3,4,1]));