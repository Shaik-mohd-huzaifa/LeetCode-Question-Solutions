var minOperations = function(nums) {
    // Initialize an object
    const obj = {}    
    let operations = 0;
    // Loop over the array and count the nums repeated and store there value and number as key

    for(let num of nums){
        obj[num] ? obj[num] += 1 : obj[num] = 1
    }

    console.log(obj)
    for(let num in obj){
        if(obj[num] == 1){
            return -1
        }else if(obj[num] % 3 != 0 || obj[num] % 2 != 0){
            let temp = obj[num];
            // operations += (obj[num] / 2) + 1;
            while(temp >= 0){
                if((temp - 3) % 2 == 0){
                    temp -= 3;
                    operations++
                }else if(temp == 1){
                    temp = 0
                    return false
                }else{
                    operations += (temp / 2)
                    temp = 0
                }
            }
        }else if(obj[num] % 3 == 0){
            operations += (obj[num] / 3)
        }else if(obj[num] % 2 == 0){
            operations += (obj[num] / 2)
        }
    }
    return operations
};