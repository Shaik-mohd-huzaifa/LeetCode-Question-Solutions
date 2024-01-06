var firstUniqChar = function(s) {
    const obj = {};
    unique = -1
    if(s){
    for(let i = 0;i < s.length;i++){
        obj[s[i]] = (obj[s[i]] || 0) + 1; 
    } 
    console.log(obj)
    for(let key in obj){
        if(obj[key] == 1){
            unique = s.indexOf(key);
            break
        }
    }
    }
    return unique
};