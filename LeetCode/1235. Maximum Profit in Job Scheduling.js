function jobScheduling(startTime, endTime, profit){
    const obj = {}

    const Min = Math.min(...startTime)
    const Max = Math.max(...endTime)

    for(let i = 0;i < startTime.length;i++){
        const track = profit[i];
        obj[track] = endTime[i] - startTime[i];
    }
    console.log(Min, Max);
    return obj;
}


console.log(jobScheduling([1,2,3,3]
    ,[3,4,5,6]
    ,[50,10,40,70]));