var numberOfBeams = function(bank) {
    // initalize a variable to keep the track of the rows
    const count = [];
    total = 0


    // Loop through each string and find out
    for(let row of bank){
        let device = 0;
        for(let i of row){
            if(Number(i)){
                device += 1
            }
        }
        if(device){
            count.push(device);
        }
    }
    
    // if the row is empty then the security devices are found on the next device
    for(let i = 0;i < count.length - 1;i++){
            if(count[i]){
                total += (count[i] * count[i + 1])
            }
    }
    return total
};
